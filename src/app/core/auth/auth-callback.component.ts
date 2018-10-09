import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from '@appCore/services';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
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
