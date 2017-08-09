import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveChristianPersuasionsComponent } from './five-christian-persuasions.component';

describe('FiveChristianPersuasionsComponent', () => {
  let component: FiveChristianPersuasionsComponent;
  let fixture: ComponentFixture<FiveChristianPersuasionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveChristianPersuasionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveChristianPersuasionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
