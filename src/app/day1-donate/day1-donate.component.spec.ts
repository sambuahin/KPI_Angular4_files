import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1DonateComponent } from './day1-donate.component';

describe('Day1DonateComponent', () => {
  let component: Day1DonateComponent;
  let fixture: ComponentFixture<Day1DonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1DonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
