import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteAuthComponent } from './execute-auth.component';

describe('ExecuteAuthComponent', () => {
  let component: ExecuteAuthComponent;
  let fixture: ComponentFixture<ExecuteAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
