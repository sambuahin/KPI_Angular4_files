import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGrowthFactorComponent } from './the-growth-factor.component';

describe('TheGrowthFactorComponent', () => {
  let component: TheGrowthFactorComponent;
  let fixture: ComponentFixture<TheGrowthFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheGrowthFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGrowthFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
