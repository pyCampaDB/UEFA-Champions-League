import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Match {
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
export class MatchService {
  httpClient = inject(HttpClient);

  getAll(): Promise<Match[]> {
    return firstValueFrom(
      this.httpClient.get<Match[]>('http://localhost:8000/api/matches/')
    )
  }
  
}
