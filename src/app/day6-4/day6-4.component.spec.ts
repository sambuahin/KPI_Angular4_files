import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day64Component } from './day6-4.component';

describe('Day64Component', () => {
  let component: Day64Component;
  let fixture: ComponentFixture<Day64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
