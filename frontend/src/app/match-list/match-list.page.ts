import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonList, IonItem, IonLabel,LoadingController, IonButton, IonSelect, IonSelectOption, IonLoading } from '@ionic/angular/standalone';
import {Match, MatchService} from '../services/match.service'

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.page.html',
  styleUrls: ['./match-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonList, IonLabel,IonButton,IonSelect, IonSelectOption, IonLoading, CommonModule, FormsModule]
})
export class MatchListPage implements OnInit {
  matches: Match[] = [];
  filteredMatches: Match[] = [];
  displayedMatches: Match[] = [];
  seasons: string[] = [];
  selectedSeason: string = '';
  matchService = inject(MatchService);
  loadingController = inject(LoadingController)
  
  currentPage: number = 1;
  pageSize: number = 50;
  totalPages: number = 0;

  async ngOnInit() {
    try {
      await this.presentLoading();
      const matches = await this.matchService.getAll();
      this.matches = matches.sort((a, b) => b.season.localeCompare(a.season));
      this.seasons = [...new Set(matches.map(match => match.season))].sort((a, b) => b.localeCompare(a));
      this.filterMatches();
    } catch (error) {
      console.error('Error fetching matches:', error);
    } finally {
      await this.dismissLoading();
    }
  }

  filterMatches() {
    if (this.selectedSeason) {
      this.filteredMatches = this.matches.filter(match => match.season === this.selectedSeason);
    } else {
      this.filteredMatches = this.matches;
    }
    this.totalPages = Math.ceil(this.filteredMatches.length/this.pageSize);
    this.loadPage(1);
  }

  loadPage(page: number){
    this.currentPage = page;
    const start = (page-1)*this.pageSize;
    const end = start + this.pageSize;
    this.displayedMatches = this.filteredMatches.slice(start, end);
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

  onSeasonChange(event: any) {
    this.selectedSeason = event.target.value;
    this.filterMatches();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
  }

  async dismissLoading() {
    await this.loadingController.dismiss();
  }
}


/*matches: Match[] = [];
  paginatedMatches: Match[] = [];
  currentPage: number = 1;
  pageSize: number = 50;
  totalPages: number = 0;
  matchService = inject(MatchService);

  async ngOnInit() {
    try {
      const matches = await this.matchService.getAll();
      this.matches = matches;
      this.totalPages = Math.ceil(this.matches.length / this.pageSize);
      this.loadPage(this.currentPage);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  }

  loadPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedMatches = this.matches.slice(start, end);
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
  }*/