import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, throwError } from 'rxjs';
import { filter, catchError, map, mergeMap, switchMap, tap, delay, exhaustMap} from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State, AuthActionTypes, ActionLogin, ActionLoginSuccess, ActionLoginRedirect } from '../reducers/auth';
import { Credentials } from '../models/user';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<State>
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<ActionLogin>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((credentials: Credentials) => {
      // fake login
      if ((credentials.username === 'test') && (credentials.password === 'test')) {
        return of(new ActionLoginSuccess({user: {username: 'test'}}));
      }
      return throwError('Invalid username and password');
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<ActionLoginSuccess>(AuthActionTypes.LoginSuccess),
    tap(() => {
      this.store.pipe(select('auth')).subscribe(auth => {
        if (auth.url) {
          this.router.navigate([auth.url]);
        }
      });
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType<ActionLoginRedirect>(AuthActionTypes.LoginRedirect),
    tap(action => {
      this.router.navigate(['/login']);
    })
  );
}
