import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day51Component } from './day5-1.component';

describe('Day51Component', () => {
  let component: Day51Component;
  let fixture: ComponentFixture<Day51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
