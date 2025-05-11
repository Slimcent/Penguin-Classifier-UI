import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPredictionsComponent } from './download-predictions.component';

describe('DownloadPredictionsComponent', () => {
  let component: DownloadPredictionsComponent;
  let fixture: ComponentFixture<DownloadPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadPredictionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
