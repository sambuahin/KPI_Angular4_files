import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day12Component } from './day1-2.component';

describe('Day12Component', () => {
  let component: Day12Component;
  let fixture: ComponentFixture<Day12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
