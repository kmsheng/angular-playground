import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHelloWorldComponent } from './page-hello-world.component';

describe('PageHelloWorldComponent', () => {
  let component: PageHelloWorldComponent;
  let fixture: ComponentFixture<PageHelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHelloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
