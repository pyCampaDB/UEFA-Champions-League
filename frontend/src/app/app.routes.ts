import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'match-list',
    loadComponent: () => import('./pages/match-list/match-list.page').then( m => m.MatchListPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'penalty',
    loadComponent: () => import('./pages/penalty/penalty.page').then( m => m.PenaltyPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.page').then( m => m.TeamPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
