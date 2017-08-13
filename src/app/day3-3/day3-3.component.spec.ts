import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day33Component } from './day3-3.component';

describe('Day33Component', () => {
  let component: Day33Component;
  let fixture: ComponentFixture<Day33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
