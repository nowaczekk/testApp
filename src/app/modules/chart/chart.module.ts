import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgChartjsModule } from 'ng-chartjs';
import { ChartService } from 'src/app/shared/services/chart.service';
// import { LineChartComponent } from 'ng-chartjs';


const routes: Routes = [
  {
    path: '',
    component: ChartComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartRoutingModule,
    NgChartjsModule
    // NgChartjsModule.registerPlugin([...])
  ],
  providers: [ChartService],
  bootstrap: []
})
export class ChartModule { }
