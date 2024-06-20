import { Component, OnInit, inject } from '@angular/core';
//import { IonSelect, IonSelectOption } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import {Team, TeamService} from '../services/team.service'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonListHeader, IonButton, IonIcon],
})
/*export class HomePage implements OnInit{
  
  teams: Team[] = []
  teamService = inject(TeamService);

  async ngOnInit() {
    const resp = await this.teamService.getAll();
    console.log(resp);
    this.teams = resp;
  }
}*/
export class HomePage implements OnInit {
  teams: Team[] = [];
  paginatedTeams: Team[] = [];
  currentPage: number = 1;
  pageSize: number = 50;
  totalPages: number = 0;
  teamService = inject(TeamService);

  async ngOnInit() {
    try {
      const teams = await this.teamService.getAll();
      this.teams = teams;
      this.totalPages = Math.ceil(this.teams.length / this.pageSize);
      this.loadPage(this.currentPage);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  }

  loadPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedTeams = this.teams.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }
}
