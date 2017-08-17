import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day41Component } from './day4-1.component';

describe('Day41Component', () => {
  let component: Day41Component;
  let fixture: ComponentFixture<Day41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
