import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day62Component } from './day6-2.component';

describe('Day62Component', () => {
  let component: Day62Component;
  let fixture: ComponentFixture<Day62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
