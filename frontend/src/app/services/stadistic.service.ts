import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
export interface Stadistic {
  id: number,
  team: string,
  amountMatches: number,
  goals: number,
  goalsAgainst: number,
  win: number,
  tie: number,
  lose: number,
  penaltisShootout: number,
  penaltisWinner: number,
  penaltisLoser: number,
  penaltisGoals: number,
  penaltisGoalsAgainst: number
}
@Injectable({
  providedIn: 'root'
})
export class StadisticService {
  httpClient = inject(HttpClient);
  getByTeam(team: string): Promise<Stadistic[]> {
    return firstValueFrom (
      this.httpClient.get<Stadistic[]>('http://localhost:8000/api/stadistics/')
    ).then(stadistics => stadistics.filter(s => s.team === team));
  }
}
