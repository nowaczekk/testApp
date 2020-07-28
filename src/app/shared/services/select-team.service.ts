import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SelectedTeamModel } from '../models/selected-team.model';

@Injectable({
  providedIn: 'root',
})
export class SelectTeamService {
  defaultTeam: SelectedTeamModel = new SelectedTeamModel();
  private _selectedTeam: BehaviorSubject<SelectedTeamModel>;

  constructor() {
    this.defaultTeam.id = '1';
    this.defaultTeam.name = 'Hawks';
    this.defaultTeam.season = '2020-06';
    this._selectedTeam = new BehaviorSubject(this.defaultTeam);
   }

  get selectedTeam(): SelectedTeamModel {
    return this._selectedTeam.value;
  }

  set selectedTeam(model: SelectedTeamModel) {
    this._selectedTeam.next(model);;
  }

}