import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonMenu,IonHeader,IonTitle,IonToolbar,IonContent,IonMenuToggle,IonItem,IonLabel, IonList } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule,IonApp, IonRouterOutlet, IonMenu,IonHeader,IonTitle,IonToolbar,IonContent,IonMenuToggle,IonItem,IonLabel, IonList, RouterLink],
})
export class AppComponent {
  authService = inject(AuthService);
  isLogged$: Observable<boolean>;
  constructor() {
    this.isLogged$=this.authService.getIsAuthenticated();
  }

  /*isLogged() {
    if(this.authService.getIsAuthenticated()){
      return true;
    } else {
      return false;
    }
  }*/

  logout() {
    return this.authService.logout();
  }
}
