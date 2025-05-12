import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ModelInfoComponent } from './model-info/model-info.component';
import { PredictSingleComponent } from './predict-single/predict-single.component';
import { PredictBatchComponent } from './predict-batch/predict-batch.component';
import { PredictFromFileComponent } from './predict-from-file/predict-from-file.component';
import { DownloadPredictionsComponent } from './download-predictions/download-predictions.component';

@NgModule({
    declarations: [
        HomeComponent,
        ModelInfoComponent,
        PredictSingleComponent,
        PredictBatchComponent,
        PredictFromFileComponent,
        DownloadPredictionsComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
