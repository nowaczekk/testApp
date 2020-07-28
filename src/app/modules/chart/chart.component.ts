import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from 'src/app/shared/services/api.service';
import { TeamListService } from 'src/app/shared/services/teams-list.service';
import { SelectedTeamModel } from 'src/app/shared/models/selected-team.model';
import { SelectTeamService } from 'src/app/shared/services/select-team.service';
import { ChartService } from 'src/app/shared/services/chart.service';
import { ChartModel } from 'src/app/shared/models/chart.model';
 
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart: any = [];
  selectedTeam: SelectedTeamModel;
  choosenTeamName = '';
  data: ChartModel[] = []

  constructor(private apiService: ApiService,
    private selectedTeamService: SelectTeamService,
    private chartService: ChartService) { }

  ngOnInit(): void {
    this.getSelectedTeam();

    this.apiService.getTeamResult(this.selectedTeam.id, this.selectedTeam.season, 1).subscribe( res => {
      this.data = this.chartService.mapDtoToChartModel(res.data, this.choosenTeamName);
      this.fetchDataToChart(this.data);
    });
  }

  fetchDataToChart(data){
    let points = data.map(res => res.points);
    let oppPoints = data.map(res => res.points_opponent);
    let alldates = data.map(res => res.date);

    let matchDates = []
    alldates.forEach((res) => {
        let jsdate = new Date(res)
        matchDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    })

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: matchDates,
        datasets: [
          { 
            label: 'selected team',
            data: points,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            label: 'opponent team',
            data: oppPoints,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: true,
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Date of the match'
            },
            display: true
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Points'
            },
            display: true
          }],
        }
      }
    });
  }

  getSelectedTeam(): void {
    this.selectedTeam = this.selectedTeamService.selectedTeam;
    this.apiService.getTeam(this.selectedTeam.id).subscribe( res => {
      this.choosenTeamName = res.name;
    });
  }

}