import { AgentStateKind } from '@appShared/models';
import { SetAgentState } from '@appShared/actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'cuy-dialer-login',
  templateUrl: './dialer-login.component.html',
  styleUrls: ['./dialer-login.component.scss']
})
export class DialerLoginComponent implements OnInit {

  constructor(private state: Store) { }

  ngOnInit() {
  }

  loginToDialer() {
    this.state.dispatch(new SetAgentState(AgentStateKind.AgentConnected));
  }

}
