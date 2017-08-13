import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDonationsComponent } from './day-donations.component';

describe('DayDonationsComponent', () => {
  let component: DayDonationsComponent;
  let fixture: ComponentFixture<DayDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
