import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, catchError, map, mergeMap, switchMap,
  tap, delay, exhaustMap, concatMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-page-rxjs',
  templateUrl: './page-rxjs.component.html',
  styleUrls: ['./page-rxjs.component.scss']
})
export class PageRxjsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
