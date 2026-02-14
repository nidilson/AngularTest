import { Routes } from '@angular/router';
import { HolaMundo } from './hola-mundo/hola-mundo';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [{
    path: '',
    component: HolaMundo
  },
  {
    path: 'dashboard',
    component: Dashboard
  }
];
