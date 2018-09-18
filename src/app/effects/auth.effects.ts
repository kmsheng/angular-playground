import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { filter, catchError, map, mergeMap, switchMap, tap, delay} from 'rxjs/operators';
import { CounterState } from './../types';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect({dispatch: false})
  loginRedirect$ = this.actions$.pipe(
    ofType('LOGIN_REDIRECT'),
    tap(action => {
      this.router.navigate(['/login']);
    })
  );
}
