import { Component,/*, OnInit*/ 
inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,ReactiveFormsModule,/*, FormsModule*/ 
Validators} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { User,SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButton, IonItem, IonLabel, IonInput, IonButtons, IonMenuButton/*, FormsModule*/]
})
export class SignupPage /*implements OnInit*/ {
  signupForm: FormGroup;
  signupService = inject(SignupService);
  usernameError: string = '';
  passwordError: string = '';
  constructor() { 
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  async onSignup() {
    this.usernameError = '';
    this.passwordError = '';

    if (this.signupForm.valid) {
      const { username, password } = this.signupForm.value;

      try {
        const result = await this.signupService.signUp({ username, password });

        if (result.success) {
          console.log('Oleee');
        } else {
          throw result;
        }
      } catch (error: any) {
        console.log('Signup error:', error);
        if (error.error) {
          const errorMsg = error.error.detail || 'Ya existe este usuario';
          this.usernameError = errorMsg;
          this.passwordError = errorMsg;
        } else {
          console.error(error);
        }
      }
    }
  }

}
