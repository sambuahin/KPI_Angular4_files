import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day32Component } from './day3-2.component';

describe('Day32Component', () => {
  let component: Day32Component;
  let fixture: ComponentFixture<Day32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
