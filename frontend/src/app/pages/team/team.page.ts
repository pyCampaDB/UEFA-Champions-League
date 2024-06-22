import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import {Team, TeamService} from '../../services/team.service'
import { StadisticService } from 'src/app/services/stadistic.service';
import { ModalController } from '@ionic/angular';
import { StadisticComponent } from 'src/app/components/stadistic/stadistic.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-team',
  templateUrl: 'team.page.html',
  styleUrls: ['team.page.scss'],
  standalone: true,
  imports: [CommonModule,IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonListHeader, IonButton, IonIcon],
  providers: [ModalController]
})
export class TeamPage implements OnInit {
  teams: Team[] = [];
  paginatedTeams: Team[] = [];
  stadisticService = inject(StadisticService);
  modalController = inject(ModalController);
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

  async showStadistics(team: string) {
    const stadistics = await this.stadisticService.getByTeam(team);
    const modal = await this.modalController.create({
      component: StadisticComponent,
      componentProps: {stadistics}
    });
    await modal.present();  
  }
}
