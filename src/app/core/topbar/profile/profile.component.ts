import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthenticationState } from '@appShared/state';
import { Observable } from 'rxjs';
import { Authentication, AgentStateKind } from '@appShared/models';
import { SetAgentState } from '@appShared/actions';

@Component({
  selector: 'cuy-topbar-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // this could be a Dumb component: @Input() and @Output() do not inherit from OnInit

  @Select(AuthenticationState.getUser) user$: Observable<Authentication>;

  constructor(private state: Store) { }

  ngOnInit() {
  }

  disconnect() {
    this.state.dispatch(new SetAgentState(AgentStateKind.None));
  }
}
