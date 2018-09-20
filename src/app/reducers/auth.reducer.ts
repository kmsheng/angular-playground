import { Action } from '@ngrx/store';
import { User, Credentials } from '../types';

export enum ActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGIN_REDIRECT = '[Auth] Login Redirect',
  SAVE_URL = '[Auth] Save Url'
}

export class ActionLogin implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor(public payload: { credentials: Credentials }) {}
}

export class ActionLoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class ActionLoginFailure implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: any }) {}
}

export class ActionLoginRedirect implements Action {
  readonly type = ActionTypes.LOGIN_REDIRECT;
}

export class ActionSaveUrl implements Action {
  readonly type = ActionTypes.SAVE_URL;
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
    case ActionTypes.LOGIN_SUCCESS:
      return {...state, user: action.payload.user};
    case ActionTypes.SAVE_URL:
      return {...state, url: action.payload.url};
    default:
      return state;
  }
}
