import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  INCREMENT = '[Counter] INCREMENT',
  DECREMENT = '[Counter] DECREMENT',
  RESET = '[Counter] RESET',
  DELAY_INCREMENT = '[Counter] DELAY_INCREMENT'
}

export class ActionIncrement implements Action {
  readonly type = CounterActionTypes.INCREMENT;
  constructor() {}
}

export class ActionDecrement implements Action {
  readonly type = CounterActionTypes.DECREMENT;
  constructor() {}
}

export class ActionReset implements Action {
  readonly type = CounterActionTypes.RESET;
  constructor() {}
}

export class ActionDelayIncrement implements Action {
  readonly type = CounterActionTypes.DELAY_INCREMENT,
  constructor() {}
}

type Actions = ActionIncrement | ActionDecrement | ActionReset | ActionDelayIncrement;

export interface State {
  count: number;
}

const initialState = 0;

export function counterReducer(state: number = initialState, action: Actions) {

  switch (action.type) {

    case CounterActionTypes.INCREMENT:
      return state + 1;

    case CounterActionTypes.DECREMENT:
      return state - 1;

    case CounterActionTypes.RESET:
      return 0;

    default:
      return state;
  }
}
