import { Action } from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = '[Counter] INCREMENT',
  DECREMENT = '[Counter] DECREMENT',
  RESET = '[Counter] RESET',
  DELAY_INCREMENT = '[Counter] DELAY_INCREMENT'
}

export class ActionIncrement implements Action {
  readonly type = ActionTypes.INCREMENT;
  constructor() {}
}

export class ActionDecrement implements Action {
  readonly type = ActionTypes.DECREMENT;
  constructor() {}
}

export class ActionReset implements Action {
  readonly type = ActionTypes.RESET;
  constructor() {}
}

export class ActionDelayIncrement implements Action {
  readonly type = ActionTypes.DELAY_INCREMENT,
  constructor() {}
}

type Actions = ActionIncrement | ActionDecrement | ActionReset | ActionDelayIncrement;

export interface State {
  count: number;
}

const initialState = 0;

export function counterReducer(state: number = initialState, action: Actions) {

  switch (action.type) {

    case ActionTypes.INCREMENT:
      return state + 1;

    case ActionTypes.DECREMENT:
      return state - 1;

    case ActionTypes.RESET:
      return 0;

    default:
      return state;
  }
}
