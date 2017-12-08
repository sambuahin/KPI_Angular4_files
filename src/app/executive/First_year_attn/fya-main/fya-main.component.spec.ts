import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyaMainComponent } from './fya-main.component';

describe('FyaMainComponent', () => {
  let component: FyaMainComponent;
  let fixture: ComponentFixture<FyaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
