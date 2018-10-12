import { AgentStateKind } from '@appShared/models';
import { SetAgentState } from '@appShared/actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthenticationService } from '@appSrc/app/core/services';

@Component({
  selector: 'cuy-dialer-login',
  templateUrl: './dialer-login.component.html',
  styleUrls: ['./dialer-login.component.scss']
})
export class DialerLoginComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [
    'TC1 - Test Campaign',
    'TC4 - SAPO Campaign',
    'WAO - The Best Campaign'
  ];
  filteredOptions: Observable<string[]>;

  constructor(private state: Store, private authService: AuthenticationService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  loginToDialer() {
    this.state.dispatch(new SetAgentState(AgentStateKind.AgentConnected));
  }

  logout(): void {
    this.authService.signout();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
