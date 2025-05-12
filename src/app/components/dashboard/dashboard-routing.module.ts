import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainModelComponent } from './train-model/train-model.component';

const routes: Routes = [
    { path: '', component: TrainModelComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }