import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { filter, catchError, map, mergeMap, switchMap, tap, delay} from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) {}

  // Listen for the 'INCREMENT' action
  @Effect()
  count$: Observable<Action> = this.actions$.pipe(
    ofType('DELAY_INCREMENT'),
    tap(action => console.log('action', action)),
    delay(1000),
    map(action => {
      return {type: 'INCREMENT'};
    })
  );
}
