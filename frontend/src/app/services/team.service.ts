import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Team {
  id: number,
  team: string
}


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  httpClient = inject(HttpClient)

  getAll(): Promise<Team[]> {
    return firstValueFrom(
      this.httpClient.get<Team[]>('http://localhost:8000/api/teams/')
    )
  }

}
