import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACTsComponent } from './acts.component';

describe('ACTsComponent', () => {
  let component: ACTsComponent;
  let fixture: ComponentFixture<ACTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
