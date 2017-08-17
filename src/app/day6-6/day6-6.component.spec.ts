import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day66Component } from './day6-6.component';

describe('Day66Component', () => {
  let component: Day66Component;
  let fixture: ComponentFixture<Day66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
