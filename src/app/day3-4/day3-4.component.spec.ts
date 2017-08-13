import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day34Component } from './day3-4.component';

describe('Day34Component', () => {
  let component: Day34Component;
  let fixture: ComponentFixture<Day34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
