import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievingGrowthIctComponent } from './achieving-growth-ict.component';

describe('AchievingGrowthIctComponent', () => {
  let component: AchievingGrowthIctComponent;
  let fixture: ComponentFixture<AchievingGrowthIctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievingGrowthIctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievingGrowthIctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
