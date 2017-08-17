import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day65Component } from './day6-5.component';

describe('Day65Component', () => {
  let component: Day65Component;
  let fixture: ComponentFixture<Day65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
