import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeSumterComponent } from './exe-sumter.component';

describe('ExeSumterComponent', () => {
  let component: ExeSumterComponent;
  let fixture: ComponentFixture<ExeSumterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeSumterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeSumterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
