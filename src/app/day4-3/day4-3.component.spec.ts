import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day43Component } from './day4-3.component';

describe('Day43Component', () => {
  let component: Day43Component;
  let fixture: ComponentFixture<Day43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
