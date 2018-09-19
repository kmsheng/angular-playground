import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRxjsComponent } from './page-rxjs.component';

describe('PageRxjsComponent', () => {
  let component: PageRxjsComponent;
  let fixture: ComponentFixture<PageRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
