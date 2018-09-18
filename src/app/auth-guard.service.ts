import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State, ActionLoginRedirect } from './reducers/auth';
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
        if (auth.user) {
          return true;
        }
        this.store.dispatch(new ActionLoginRedirect());
        return false;
      }),
      take(1)
    );
  }
}
