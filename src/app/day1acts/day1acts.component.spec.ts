import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1actsComponent } from './day1acts.component';

describe('Day1actsComponent', () => {
  let component: Day1actsComponent;
  let fixture: ComponentFixture<Day1actsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1actsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1actsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
