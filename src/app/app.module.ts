import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelInfoComponent } from './components/user/model-info/model-info.component';
import { PredictSingleComponent } from './components/user/predict-single/predict-single.component';
import { PredictBatchComponent } from './components/user/predict-batch/predict-batch.component';
import { PredictFromFileComponent } from './components/user/predict-from-file/predict-from-file.component';
import { DownloadPredictionsComponent } from './components/user/download-predictions/download-predictions.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelInfoComponent,
    PredictSingleComponent,
    PredictBatchComponent,
    PredictFromFileComponent,
    DownloadPredictionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
