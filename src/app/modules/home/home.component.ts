import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@appCore/services';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Authentication } from '@appShared/models';
import { AuthenticationState, SystemState } from '@appShared/state';

@Component({
  selector: 'cuy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(AuthenticationState.getUser) user$: Observable<Authentication>;
  @Select(SystemState.isAgentConnected) isAgentConnected$: Observable<boolean>;

  constructor(private authService: AuthenticationService, private store: Store) {
  }

  ngOnInit() { }

  signOut(): void {
    this.authService.signout();
  }
}
