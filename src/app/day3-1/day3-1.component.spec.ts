import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31Component } from './day3-1.component';

describe('Day31Component', () => {
  let component: Day31Component;
  let fixture: ComponentFixture<Day31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
