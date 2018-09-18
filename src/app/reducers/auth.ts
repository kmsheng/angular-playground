import { Action } from '@ngrx/store';
import { User } from '../models/user';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null
};

export function authReducer(state: object = initialState, action: Action) {

  switch (action.type) {
    default:
      return state;
  }
}
