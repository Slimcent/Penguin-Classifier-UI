import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictFromFileComponent } from './predict-from-file.component';

describe('PredictFromFileComponent', () => {
  let component: PredictFromFileComponent;
  let fixture: ComponentFixture<PredictFromFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictFromFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictFromFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
