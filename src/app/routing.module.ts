import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamSelectComponent } from './modules/team-select/team-select.component';

const routes: Routes = [
  { path: '', redirectTo: '/teamselect', pathMatch: 'full' },
  { path: 'teamselect', component: TeamSelectComponent},
  { path: 'list', 
    loadChildren: () => import('./modules/list/list.module').then(m => m.ListModule)},
  { path: 'chart', 
    loadChildren: () => import('./modules/chart/chart.module').then(m => m.ChartModule)},
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }