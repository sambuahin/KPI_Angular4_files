import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyaSumterComponent } from './fya-sumter.component';

describe('FyaSumterComponent', () => {
  let component: FyaSumterComponent;
  let fixture: ComponentFixture<FyaSumterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyaSumterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyaSumterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
