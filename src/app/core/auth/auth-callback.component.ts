import { AdalService } from 'adal-angular4';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private adalService: AdalService,
    private _zone: NgZone) { }

  ngOnInit() {
    this.adalService.handleWindowCallback();

    this.adalService.getUser().subscribe(user => {
      const loggedUser = user;
      console.log(this.adalService.userInfo, loggedUser);
      // var expireIn=user.profile.exp-newDate().getTime();
    });

    setTimeout(() => {
      this._zone.run(
        () => this.router.navigate(['/'])
      );
      console.log('setTimeout executed');
    }, 200);
  }
}
