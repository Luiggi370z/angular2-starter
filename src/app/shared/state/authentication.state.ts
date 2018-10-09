import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetAuthenticatedUser } from './../actions/authentication.action';
import { Authentication } from '@appShared/models';

export class AuthenticationStateModel {
  user: Authentication;
}

@State<AuthenticationStateModel>({
  name: 'user',
  defaults: {
    user: null
  }
})
export class AuthenticationState {
  @Selector()
  static getUser(state: AuthenticationStateModel) {
      return state.user;
  }

  @Action(SetAuthenticatedUser)
  add({ patchState }: StateContext<AuthenticationStateModel>, { payload }: SetAuthenticatedUser) {
      patchState({
          user: payload
      });
  }
}
