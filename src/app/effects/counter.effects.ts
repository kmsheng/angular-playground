import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, timer } from 'rxjs';
import { filter, catchError, map, mergeMap, switchMap, concatMap, tap, delay, debounce} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ActionDelayIncrement, ActionIncrement, CounterActionTypes.DELAY_INCREMENT } from '../reducers/counter.reducer';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) {}

  // Listen for the 'INCREMENT' action
  @Effect()
  count$ = this.actions$.pipe(
    ofType<ActionDelayIncrement>(CounterActionTypes.DELAY_INCREMENT),
    debounce(() => timer(1000)),
    concatMap(() => {
      return of(new ActionIncrement());
    })
  );
}
