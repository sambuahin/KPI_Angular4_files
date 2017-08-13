import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day11Component } from './day1-1.component';

describe('Day11Component', () => {
  let component: Day11Component;
  let fixture: ComponentFixture<Day11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
