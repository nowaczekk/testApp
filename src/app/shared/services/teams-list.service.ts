import { Injectable } from '@angular/core';
import { MatchModel } from '../models/match.model';
import { TeamListModel } from '../models/team-list.model';

@Injectable()
export class TeamListService {
  mapDtoToDisplayModel(data: TeamListModel[], choosenTeamName: string): MatchModel[] {
    const results: MatchModel[] = []

    data.map((match) => {
      const isHomeTeam = match.home_team.name === choosenTeamName
      let result = new MatchModel();

      result.season = match.season;
      result.date = match.date;

      if(isHomeTeam) {
        result.opponent_team = match.home_team.name;
        result.points = match.home_team_score;
        result.points_opponent = match.visitor_team_score;
        result.score = result.points > result.points_opponent? 'W' : 'L';
        result.division = match.visitor_team.division;
        result.conference = match.visitor_team.conference;
      } else {
        result.opponent_team = match.visitor_team.name;
        result.points = match.visitor_team_score;
        result.points_opponent = match.home_team_score;
        result.score = result.points > result.points_opponent? 'L' : 'W';
        result.division = match.home_team.division;
        result.conference = match.home_team.conference;
      }
      results.push(result);
    })

    return results;
  }
}