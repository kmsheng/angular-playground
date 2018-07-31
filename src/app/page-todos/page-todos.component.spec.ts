import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTodosComponent } from './page-todos.component';

describe('PageTodosComponent', () => {
  let component: PageTodosComponent;
  let fixture: ComponentFixture<PageTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
