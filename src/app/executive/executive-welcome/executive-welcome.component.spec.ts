import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveWelcomeComponent } from './executive-welcome.component';

describe('ExecutiveWelcomeComponent', () => {
  let component: ExecutiveWelcomeComponent;
  let fixture: ComponentFixture<ExecutiveWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
