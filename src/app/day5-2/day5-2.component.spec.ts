import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day52Component } from './day5-2.component';

describe('Day52Component', () => {
  let component: Day52Component;
  let fixture: ComponentFixture<Day52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
