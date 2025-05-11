import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictBatchComponent } from './predict-batch.component';

describe('PredictBatchComponent', () => {
  let component: PredictBatchComponent;
  let fixture: ComponentFixture<PredictBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
