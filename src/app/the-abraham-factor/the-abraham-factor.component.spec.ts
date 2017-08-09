import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAbrahamFactorComponent } from './the-abraham-factor.component';

describe('TheAbrahamFactorComponent', () => {
  let component: TheAbrahamFactorComponent;
  let fixture: ComponentFixture<TheAbrahamFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheAbrahamFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAbrahamFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
