import { Component, Input, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Stadistic } from 'src/app/services/stadistic.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stadistic',
  templateUrl: './stadistic.component.html',
  styleUrls: ['./stadistic.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule,IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem, IonLabel, IonButtons, IonButton]
})
export class StadisticComponent  /*implements OnInit*/ {
  @Input() stadistics: Stadistic[] = [];
  modalController = inject(ModalController);

  dismiss() {
    this.modalController.dismiss();
  }

}
