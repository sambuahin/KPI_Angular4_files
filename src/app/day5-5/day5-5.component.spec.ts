import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day55Component } from './day5-5.component';

describe('Day55Component', () => {
  let component: Day55Component;
  let fixture: ComponentFixture<Day55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
