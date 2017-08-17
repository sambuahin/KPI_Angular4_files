import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2DonateComponent } from './day2-donate.component';

describe('Day2DonateComponent', () => {
  let component: Day2DonateComponent;
  let fixture: ComponentFixture<Day2DonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2DonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
