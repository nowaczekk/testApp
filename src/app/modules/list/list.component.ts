import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SelectedTeamModel } from 'src/app/shared/models/selected-team.model';
import { SelectTeamService } from 'src/app/shared/services/select-team.service';
import { map } from 'rxjs/internal/operators/map';
import { MetadataModel } from 'src/app/shared/models/metadata.model';
import { TeamListModel } from 'src/app/shared/models/team-list.model';
import { MatchModel } from 'src/app/shared/models/match.model';
import { TeamListService } from 'src/app/shared/services/teams-list.service';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  choosenTeamName = '';
  isLoading = true;
  filterValue = '';
  selectedTeam: SelectedTeamModel;
  pageInfo: MetadataModel;
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['season', 'opponent_team', 'score', 'points','points_opponent','date'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiService: ApiService, 
      private chRef: ChangeDetectorRef,
      private teamListService: TeamListService, 
      private selectedTeamService: SelectTeamService) { }

  ngOnInit(): void {
    this.getSelectedParameters();
    this.getSelectedTeam();
    this.getTeamResultPage()

    this.dataSource.paginator = this.paginator;
  }

  getServerData(event: PageEvent){
    this.isLoading = true;
    this.getTeamResultPage(event.pageIndex);
  }

  getTeamResultPage(page: number = 1): void {
    this.apiService.getTeamResult(this.selectedTeam.id, this.selectedTeam.season , page).pipe(map(res => {
      this.savePageInfo(res.meta);
      this.dataSource = new MatTableDataSource(this.teamListService.mapDtoToDisplayModel(res.data, this.choosenTeamName));
    })).subscribe( () => {
      this.isLoading = false;
      this.chRef.detectChanges();
    });
  }

  getSelectedTeam(): void {
    this.apiService.getTeam(this.selectedTeam.id).subscribe( res => {
      this.choosenTeamName = res.name;
      this.chRef.detectChanges();
    });
  }

  getSelectedParameters(): void {
    this.selectedTeam = this.selectedTeamService.selectedTeam;
  }

  savePageInfo(metaData: MetadataModel): void {
    this.pageInfo = metaData;
  }

  applyFilter(): void{
    this.dataSource.filter = this.filterValue.trim();
  }
}