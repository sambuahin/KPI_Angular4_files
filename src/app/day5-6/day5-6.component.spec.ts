import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day56Component } from './day5-6.component';

describe('Day56Component', () => {
  let component: Day56Component;
  let fixture: ComponentFixture<Day56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
