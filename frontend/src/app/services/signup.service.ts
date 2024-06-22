import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
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
  
  signUp(user: User): Promise<User> {
    return firstValueFrom (
      this.httpClient.post<User>('http://localhost:8000/api/signup/', user)
    )
  }
}
