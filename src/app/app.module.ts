import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { TeamSelectModule } from './modules/team-select/team-select.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { ChartModule } from './modules/chart/chart.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // AppMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    NavigationModule,
    NoopAnimationsModule,
    TeamSelectModule,
    RoutingModule,
    MatSliderModule,
    MatButtonModule,
    NgChartjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
