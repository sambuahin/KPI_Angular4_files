import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day44Component } from './day4-4.component';

describe('Day44Component', () => {
  let component: Day44Component;
  let fixture: ComponentFixture<Day44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
