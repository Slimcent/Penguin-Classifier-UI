import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainModelComponent } from './train-model/train-model.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TrainModelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
