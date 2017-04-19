import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorReactiveFormComponent } from './author-reactive-form.component';

describe('AuthorReactiveFormComponent', () => {
  let component: AuthorReactiveFormComponent;
  let fixture: ComponentFixture<AuthorReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
