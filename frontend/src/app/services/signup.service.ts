import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom,throwError } from 'rxjs';
import { catchError } from 'rxjs';

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
  async signUp(user: User): Promise<{ success: boolean; error?: { detail: string; field: string } }> {
    try {
      await firstValueFrom(this.httpClient.post<User>('http://localhost:8000/api/signup/', user).pipe(
        catchError((error) => {
          console.error('Registration failed', error);
          return throwError({ success: false, error: error.error || { detail: 'Unknown error', field: 'general' } });
        })
      ));
      this.router.navigate(['/login']);
      return { success: true };
    } catch (error: any) {
      console.error('Registration failed', error);
      return { success: false, error: error.error || { detail: 'Unknown error', field: 'general' } };
    }
  }
}
