import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day54Component } from './day5-4.component';

describe('Day54Component', () => {
  let component: Day54Component;
  let fixture: ComponentFixture<Day54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
