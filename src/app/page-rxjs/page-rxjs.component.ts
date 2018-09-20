import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of, interval, merge, fromEvent, timer } from 'rxjs';
import { filter, catchError, map, mergeMap, switchMap, mapTo,
  tap, delay, exhaustMap, concatMap, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-page-rxjs',
  templateUrl: './page-rxjs.component.html',
  styleUrls: ['./page-rxjs.component.scss']
})
export class PageRxjsComponent implements OnInit {

  @ViewChild('input') input: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        switchMap(id => {
          return this.http.get(`/api/students/${id}`)
            .pipe(
              catchError(error => {
                return of('empty inside');
              })
            );
        })
      )
      .subscribe(
        v => console.log('v', v),
        err => console.log('err', err),
        () => console.log('complete')
      );
  }

}
