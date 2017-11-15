import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystEmailComponent } from './analyst-email.component';

describe('AnalystEmailComponent', () => {
  let component: AnalystEmailComponent;
  let fixture: ComponentFixture<AnalystEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
