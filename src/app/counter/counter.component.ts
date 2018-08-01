import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT } from './../reducers/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increase() {
    this.store.dispatch({type: INCREMENT});
  }

}
