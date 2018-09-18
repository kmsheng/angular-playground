import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from './reducers/auth';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {

    return this.store.pipe(
      select('auth'),
      map(auth => {
        if (! auth.user) {
          this.store.dispatch({type: 'LOGIN_REDIRECT'});
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
