import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Penalty, PenaltyService } from 'src/app/services/penalty.service';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.page.html',
  styleUrls: ['./penalty.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem, IonLabel, IonSelect, IonSelectOption,CommonModule, FormsModule]
})
export class PenaltyPage implements OnInit {
  penaltis: Penalty[] = [];
  filteredPenaltis: Penalty[] = [];
  penaltyService = inject(PenaltyService);
  seasons: string[] = [];
  selectedSeason: string = '';
  async ngOnInit() {
    try{
      const penaltis = await this.penaltyService.getAll();
      this.penaltis = penaltis.sort((a, b) => b.season.localeCompare(a.season));
      this.seasons = [...new Set(penaltis.map(penalty => penalty.season))].sort((a, b) => b.localeCompare(a));
      this.filterPenaltis();
    } catch (error) {
      console.error('Error fetching penaltis: ', error)
    }
  }

  filterPenaltis() {
    if (this.selectedSeason) {
      this.filteredPenaltis = this.penaltis.filter(penalty => penalty.season === this.selectedSeason);
    } else {
      this.filteredPenaltis = this.penaltis;
    }
  }

  onSeasonChange(event: any) {
    this.selectedSeason = event.target.value;
    this.filterPenaltis();
  }

}
