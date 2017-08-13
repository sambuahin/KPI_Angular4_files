import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day13Component } from './day1-3.component';

describe('Day13Component', () => {
  let component: Day13Component;
  let fixture: ComponentFixture<Day13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
