import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day63Component } from './day6-3.component';

describe('Day63Component', () => {
  let component: Day63Component;
  let fixture: ComponentFixture<Day63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
