import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetAgentState } from '@appShared/actions';
import { System, AgentStateKind } from '@appShared/models';

@State<System>({
  name: 'system',
  defaults: {
    agentState: AgentStateKind.None
  }
})
export class SystemState {
  @Selector()
  static isAgentConnected(state: System) {
      // tslint:disable-next-line:no-bitwise
      return (state.agentState & AgentStateKind.AgentConnected) === AgentStateKind.AgentConnected;
  }

  @Action(SetAgentState)
  setAgentState({ patchState }: StateContext<System>, { payload }: SetAgentState) {
      patchState({
          agentState: payload
      });
  }
}
