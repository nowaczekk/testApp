import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { take, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamModel } from '../models/team.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService{
  url='https://free-nba.p.rapidapi.com/teams'

  constructor(private http: HttpClient) {
  }

  get(): Observable<TeamModel[]>{
    const headers = this.createHeaders();
    return this.http.get<ResponseModel>(this.url, {headers}).pipe(map(el => el.data), take(1));
  } 

  getTeam(id: string): Observable<TeamModel>{
    const headers = this.createHeaders();
    let url = `https://free-nba.p.rapidapi.com/games?%255B${id}%`
    return this.http.get<ResponseModel>(url, {headers}).pipe(map(el => el.data), take(1));
  }

  getTeamResult(id: string, season: string, page = 0){
    const headers = this.createHeaders();
    const url = this.buildUrl(id, season, page);
    return this.http.get<ResponseModel>(url, {headers}).pipe(take(1));
  }

  private buildUrl(id, season, page): string {
    let url = `https://free-nba.p.rapidapi.com/games?Seasons=${season}&page=${page}&team_ids=%255B${id}%255D&per_page=25`
    return url;
  }

  private createHeaders(): HttpHeaders{
    return new HttpHeaders({'x-rapidapi-key':'bd9ca544d9msheeef4d11daa8304p1773b9jsnb72720bee8a3'});
}


}