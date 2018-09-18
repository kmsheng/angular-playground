import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActionTypes } from '../reducers/auth';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  constructor(private store: Store<'auth'>) {
  }

  ngOnInit() {
  }

  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.store.dispatch({
        type: AuthActionTypes.Login,
        payload: {
          username: form.value.username,
          password: form.value.password
        }
      });
    }
  }
}
