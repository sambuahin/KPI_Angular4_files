import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodsRubricComponent } from './gods-rubric.component';

describe('GodsRubricComponent', () => {
  let component: GodsRubricComponent;
  let fixture: ComponentFixture<GodsRubricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodsRubricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodsRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
