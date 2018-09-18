import { Action } from '@ngrx/store';
import { User, Credentials } from '../models/user';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
  SaveUrl = '[Auth] Save Url'
}

export class ActionLogin implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { credentials: Credentials }) {}
}

export class ActionLoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: { user: User }) {}
}

export class ActionLoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: { error: any }) {}
}

export class ActionLoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export class ActionSaveUrl implements Action {
  readonly type = AuthActionTypes.SaveUrl;
  constructor(public payload: { url?: string }) {}
}

type Actions = ActionLogin | ActionLoginSuccess | ActionLoginFailure | ActionLoginRedirect | ActionSaveUrl;

export interface State {
  user: User | null;
  url: String | null;
}

export const initialState: State = {
  user: null,
  url: null
};

export function authReducer(state: object = initialState, action: Actions) {

  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {...state, user: action.payload.user};
    case AuthActionTypes.SaveUrl:
      return {...state, url: action.payload.url};
    default:
      return state;
  }
}
