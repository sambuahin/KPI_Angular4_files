import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day53Component } from './day5-3.component';

describe('Day53Component', () => {
  let component: Day53Component;
  let fixture: ComponentFixture<Day53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
