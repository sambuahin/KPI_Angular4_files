import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblicalAssumptionOfGivingComponent } from './biblical-assumption-of-giving.component';

describe('BiblicalAssumptionOfGivingComponent', () => {
  let component: BiblicalAssumptionOfGivingComponent;
  let fixture: ComponentFixture<BiblicalAssumptionOfGivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblicalAssumptionOfGivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblicalAssumptionOfGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
