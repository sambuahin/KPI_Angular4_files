import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyaCharlotteComponent } from './fya-charlotte.component';

describe('FyaCharlotteComponent', () => {
  let component: FyaCharlotteComponent;
  let fixture: ComponentFixture<FyaCharlotteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyaCharlotteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyaCharlotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
