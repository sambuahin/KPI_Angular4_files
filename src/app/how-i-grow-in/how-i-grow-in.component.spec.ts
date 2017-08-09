import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIGrowInComponent } from './how-i-grow-in.component';

describe('HowIGrowInComponent', () => {
  let component: HowIGrowInComponent;
  let fixture: ComponentFixture<HowIGrowInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowIGrowInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowIGrowInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
