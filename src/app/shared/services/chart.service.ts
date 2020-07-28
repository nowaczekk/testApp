import { Injectable } from '@angular/core';
import { MatchModel } from '../models/match.model';
import { TeamListModel } from '../models/team-list.model';
import { ChartModel } from '../models/chart.model';

@Injectable()
export class ChartService {

  constructor() {
   }

  mapDtoToChartModel(data: TeamListModel[], choosenTeamName): ChartModel[] {
    const results: ChartModel[] = []

    data.map((match) => {
      const isHomeTeam = match.home_team.name === choosenTeamName
      let result = new ChartModel();

      result.date = match.date;

      if(isHomeTeam) {
        result.opponent_team = match.home_team.name;
        result.points = match.home_team_score;
        result.points_opponent = match.visitor_team_score;
      } else {
        result.opponent_team = match.visitor_team.name;
        result.points = match.visitor_team_score;
        result.points_opponent = match.home_team_score;
      }
      results.push(result);
    })

    console.log(`results ${JSON.stringify(results)}`)

    return results;
  }
}