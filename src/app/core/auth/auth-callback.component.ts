import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from '@appCore/services';

@Component({
  selector: 'cuy-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private _zone: NgZone) { }

  ngOnInit() {
    this.authService.completeAuthentication();

    setTimeout(() => {
      this._zone.run(
        () => this.router.navigate(['/'])
      );
    }, 200);
  }
}
