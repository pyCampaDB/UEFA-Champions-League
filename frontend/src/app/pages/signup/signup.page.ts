import { Component/*, OnInit*/ } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,ReactiveFormsModule,/*, FormsModule*/ 
Validators} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';
import { User,SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButton, IonItem, IonLabel, IonInput/*, FormsModule*/]
})
export class SignupPage /*implements OnInit*/ {
  signupForm: FormGroup;
  constructor(private signupService: SignupService) { 
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  async onSignup() {
    if (this.signupForm.valid) {
      const user: User = this.signupForm.value;
      try{
        const result = await this.signupService.signUp(user);
        console.log('Oleeee');
      } catch(error) {
        console.error('Penalty');
      }
    }
  }  

}
