import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, ActionIncrement, ActionDelayIncrement } from './../reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment(event) {
    event.preventDefault();
    this.store.dispatch(new ActionIncrement());
  }

  delayIncrement() {
    event.preventDefault();
    this.store.dispatch(new ActionDelayIncrement());
  }

}
