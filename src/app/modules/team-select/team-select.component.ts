import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { TeamModel } from 'src/app/shared/models/team.model';
import { SelectTeamService } from 'src/app/shared/services/select-team.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectedTeamModel } from 'src/app/shared/models/selected-team.model';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {
  teamSelect: FormGroup;
  teams: TeamModel[] = [];
  
  constructor(private apiService: ApiService,
        private formBuilder: FormBuilder,
        private router: Router,
        private selectTeamService: SelectTeamService) {}

  ngOnInit(): void {
      this.apiService.get().subscribe( teams => {
        this.teams = teams;
      });

      this.teamSelect = this.formBuilder.group({
        teamId: [this.selectTeamService.selectedTeam.id, Validators.required],
        season: ['2020-07', Validators.required]
      });
  }

  onSave(): void{
    const model = this.getModel();
    this.selectTeamService.selectedTeam = model;
    this.router.navigate(['list'])
  }
 
  private getModel(): SelectedTeamModel{
    const model = new SelectedTeamModel();
    model.id = this.teamSelect.controls['teamId'].value;
    model.season = this.teamSelect.controls['season'].value.substring(0, 4);
    
    return model
  }
}