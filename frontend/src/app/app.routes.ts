import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'match-list',
    loadComponent: () => import('./pages/match-list/match-list.page').then( m => m.MatchListPage)
  },
  {
    path: 'penalty',
    loadComponent: () => import('./pages/penalty/penalty.page').then( m => m.PenaltyPage)
  },
];
