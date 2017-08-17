import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day46Component } from './day4-6.component';

describe('Day46Component', () => {
  let component: Day46Component;
  let fixture: ComponentFixture<Day46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
