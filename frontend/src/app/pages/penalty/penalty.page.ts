import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Penalty, PenaltyService } from 'src/app/services/penalty.service';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.page.html',
  styleUrls: ['./penalty.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem, IonLabel, CommonModule, FormsModule]
})
export class PenaltyPage implements OnInit {
  penaltis: Penalty[] = [];
  penaltyService = inject(PenaltyService);
  async ngOnInit() {
    const penaltis = await this.penaltyService.getAll();
    this.penaltis = penaltis.sort((a, b) => b.season.localeCompare(a.season));
  }



}
