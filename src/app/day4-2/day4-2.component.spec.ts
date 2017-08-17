import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day42Component } from './day4-2.component';

describe('Day42Component', () => {
  let component: Day42Component;
  let fixture: ComponentFixture<Day42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
