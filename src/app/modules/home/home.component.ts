import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SystemState } from '@appShared/state';

@Component({
  selector: 'cuy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(SystemState.isAgentConnected) isAgentConnected$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() { }
}
