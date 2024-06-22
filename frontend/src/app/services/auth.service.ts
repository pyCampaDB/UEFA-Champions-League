import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';

export interface User {
  username: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string | null>(null);
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username:string, password:string): Promise<User>{
    return firstValueFrom(
      this.httpClient.post<User>('http://localhost:8000/api/token/', {username, password})
    )
  }

  setSession (authResult: any, username: string) : void {
    localStorage.setItem('access_token', authResult.access);
    localStorage.setItem('refresh_token', authResult.refresh);
    this.isAuthenticated.next(true);
    this.username.next(username);
    this.router.navigate(['/home']);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.isAuthenticated.next(false);
    this.username.next(null);
    this.router.navigate(['/login']);
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  getUsername(): Observable<string | null> {
    return this.username.asObservable();
  }
}

