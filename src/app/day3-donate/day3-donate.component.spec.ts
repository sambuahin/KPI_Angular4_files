import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3DonateComponent } from './day3-donate.component';

describe('Day3DonateComponent', () => {
  let component: Day3DonateComponent;
  let fixture: ComponentFixture<Day3DonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3DonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
