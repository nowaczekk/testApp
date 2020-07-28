import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { ResponseModel } from '../models/response.model';
import { map } from 'rxjs/internal/operators/map';

export abstract class ApiClientService{
    baseUrl='https://free-nba.p.rapidapi.com/'
  
    constructor(private http: HttpClient) {}
  
    get(url: string): Observable<ResponseModel>{
      const requestUrl = this.baseUrl += url
      const headers = this.createHeaders();
      return this.http.get<ResponseModel>(requestUrl, {headers}).pipe(map(el => el.data), take(1));
    } 

    private createHeaders(): HttpHeaders{
        return new HttpHeaders({'x-rapidapi-key':'bd9ca544d9msheeef4d11daa8304p1773b9jsnb72720bee8a3'});
    }

    // getTeam(id: string): Observable<TeamModel>{
    //   const headers = new HttpHeaders({'x-rapidapi-key':'bd9ca544d9msheeef4d11daa8304p1773b9jsnb72720bee8a3'});
    //   let url = `https://free-nba.p.rapidapi.com/games?%255B${id}%`
    //   return this.http.get<ResponseModel>(url, {headers}).pipe(map(el => el.data), take(1));
    // }
  
    // getTeamResult(id: string,season: string, page = 0){
    //   const headers = new HttpHeaders({'x-rapidapi-key':'bd9ca544d9msheeef4d11daa8304p1773b9jsnb72720bee8a3'});
    //   const url = this.buildUrl(id, season, page);
    //   return this.http.get<ResponseModel>(url, {headers}).pipe(take(1));
    // }
  
    private buildUrl(id, season, page): string {
      let url = `https://free-nba.p.rapidapi.com/games?Seasons=${season}&page=${page}&team_ids=%255B${id}%255D&per_page=25`
      return url;
    }
  }