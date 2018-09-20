import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State, ActionLogin } from '../reducers/auth.reducer';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.store.dispatch(new ActionLogin({
        username: form.value.username,
        password: form.value.password
      }));
    }
  }
}
