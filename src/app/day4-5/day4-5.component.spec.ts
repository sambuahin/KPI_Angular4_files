import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day45Component } from './day4-5.component';

describe('Day45Component', () => {
  let component: Day45Component;
  let fixture: ComponentFixture<Day45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
