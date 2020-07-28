import { NgModule } from '@angular/core';
import { TeamSelectComponent } from './team-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TeamSelectComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class TeamSelectModule { }
