import { Action } from '@ngrx/store';
import { User, Credentials } from '../models/user';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
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

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null
};

export function authReducer(state: object = initialState, action: Action) {

  switch (action.type) {
    case AuthActionTypes.Login:
      break;
    case AuthActionTypes.LoginSuccess:
      console.log('action', action.payload);
      return {...state, user: {}};
    case AuthActionTypes.LoginFailure:
      break;
    default:
      return state;
  }
}
