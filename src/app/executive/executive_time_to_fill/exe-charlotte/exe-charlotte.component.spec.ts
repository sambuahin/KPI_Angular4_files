import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeCharlotteComponent } from './exe-charlotte.component';

describe('ExeCharlotteComponent', () => {
  let component: ExeCharlotteComponent;
  let fixture: ComponentFixture<ExeCharlotteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeCharlotteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeCharlotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
