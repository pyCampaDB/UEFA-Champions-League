import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

export interface User {
  username: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  httpClient = inject(HttpClient);
  router=inject(Router);
  async signUp(user: User): Promise<void> {
    try {
      await firstValueFrom(this.httpClient.post<User>('http://localhost:8000/api/signup/', user));
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Registration failed', error);
    }
  }
}
