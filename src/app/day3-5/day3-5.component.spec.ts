import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day35Component } from './day3-5.component';

describe('Day35Component', () => {
  let component: Day35Component;
  let fixture: ComponentFixture<Day35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
