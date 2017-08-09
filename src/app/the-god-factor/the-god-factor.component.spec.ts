import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGodFactorComponent } from './the-god-factor.component';

describe('TheGodFactorComponent', () => {
  let component: TheGodFactorComponent;
  let fixture: ComponentFixture<TheGodFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheGodFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGodFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
