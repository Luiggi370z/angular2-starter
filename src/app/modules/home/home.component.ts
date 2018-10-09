import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@appCore/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.user = user.profile.name;
    });
  }

  signOut(): void {
    this.authService.signout();
  }
}
