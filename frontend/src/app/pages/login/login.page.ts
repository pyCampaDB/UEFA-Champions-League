import { Component,/*, OnInit*/ 
inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonInput, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton,IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonItem, IonButton, IonInput, ReactiveFormsModule, FormsModule]
})
export class LoginPage /*implements OnInit*/ {
  loginForm: FormGroup;
  authService = inject(AuthService);
  usernameError: string = '';
  passwordError: string = '';
constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  } 

  /*ngOnInit() {
  }*/


  async login() {
    this.usernameError = '';
    this.passwordError = '';

    const { username, password } = this.loginForm.value;

    try {
      const response = await this.authService.login(username, password);
      this.authService.setSession(response, username);
    } catch (error: any) {
      if (error.error) {
        const errorMsg = error.error.detail || 'Invalid credentials';
        this.usernameError = errorMsg;
        this.passwordError = errorMsg;
      } else {
        console.error(error);
      }
    }
  }
}
