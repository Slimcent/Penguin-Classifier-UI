import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictSingleComponent } from './predict-single.component';

describe('PredictSingleComponent', () => {
  let component: PredictSingleComponent;
  let fixture: ComponentFixture<PredictSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
