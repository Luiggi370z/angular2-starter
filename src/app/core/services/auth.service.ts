import { Injectable } from '@angular/core';
import { environment } from '@appSrc/environments/environment';
import { AdalService } from 'adal-angular4';

import { Store } from '@ngxs/store';
import { SetAuthenticatedUser } from '@appShared/actions';

// TODO: for REST calls maybe AdalInterceptor will be required to refresh token if it is expired or close to be
// also listen to the acquireToken event to catch any error. Required modules already in core.module

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private adalService: AdalService, private store: Store) {
    this.adalService.init(environment.adalConfig);
  }

  public isLoggedIn(): boolean {
    return this.adalService.userInfo.authenticated;
  }

  public signout() {
    this.adalService.logOut();
  }

  public startAuthentication() {
    this.adalService.login();
  }

  public getUser() {
    return this.adalService.getUser();
  }

  public completeAuthentication() {
    this.adalService.handleWindowCallback();

    this.saveAuthenticatedUserInState();
  }

  public saveAuthenticatedUserInState() {
    this.adalService.getUser()
      .subscribe(user => this.store.dispatch(new SetAuthenticatedUser({
        name: user.profile.name,
        email: user.userName
      })));
  }
}
