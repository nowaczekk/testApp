import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field'
import { CommonModule } from '@angular/common';
import { TeamListService } from 'src/app/shared/services/teams-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  providers: [
    TeamListService
  ],
  bootstrap: []
})
export class ListModule { }
