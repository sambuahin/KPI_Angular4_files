import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTtfComponent } from './main-ttf.component';

describe('MainTtfComponent', () => {
  let component: MainTtfComponent;
  let fixture: ComponentFixture<MainTtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
