import { Authentication } from '@appShared/models';

export class SetAuthenticatedUser {
    static readonly type = '[Authentication] Set User';

    constructor(public payload: Authentication) {}
}
