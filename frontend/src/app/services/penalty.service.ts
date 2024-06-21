import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
export interface Penalty {
  id: number,
  home: string,
  away: string,
  goalHome: number,
  goalAway: number,
  season: string,
  round: string,
  winner: string
}
@Injectable({
  providedIn: 'root'
})
export class PenaltyService {
  httpClient=inject(HttpClient);
  getAll() {
    return firstValueFrom(
      this.httpClient.get<Penalty[]>('http://localhost:8000/api/penaltis/')
    )
  }
  /*constructor() { }*/
}
