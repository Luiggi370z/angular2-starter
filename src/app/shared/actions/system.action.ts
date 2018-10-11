import { AgentStateKind } from '@appShared/models';

export class SetAgentState {
    static readonly type = '[System] Set Agent State';

    constructor(public payload: AgentStateKind) {}
}
