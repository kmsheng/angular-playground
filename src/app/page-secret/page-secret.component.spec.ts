import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecretComponent } from './page-secret.component';

describe('PageSecretComponent', () => {
  let component: PageSecretComponent;
  let fixture: ComponentFixture<PageSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
