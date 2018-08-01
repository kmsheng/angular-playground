import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { filter, catchError, map, mergeMap, switchMap, tap, delay } from 'rxjs/operators';
import { CounterState } from './../types';
import { Store } from '@ngrx/store';

@Injectable()
export class CounterEffects {

  // Listen for the 'INCREMENT' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType('INCREMENT'),
    tap(action => {
      console.log('this.state$', this.state$);
    }),
    filter(() => false)
  );

  constructor(private actions$: Actions, private state$: Store<CounterState>) {}
}
