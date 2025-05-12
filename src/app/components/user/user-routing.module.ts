import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ModelInfoComponent } from './model-info/model-info.component';
import { PredictSingleComponent } from './predict-single/predict-single.component';
import { PredictBatchComponent } from './predict-batch/predict-batch.component';
import { PredictFromFileComponent } from './predict-from-file/predict-from-file.component';
import { DownloadPredictionsComponent } from './download-predictions/download-predictions.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'model-info', component: ModelInfoComponent },
            { path: 'predict-single', component: PredictSingleComponent },
            { path: 'predict-batch', component: PredictBatchComponent },
            { path: 'predict-from-file', component: PredictFromFileComponent },
            { path: 'download-predictions', component: DownloadPredictionsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }