import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '',          loadComponent: () => import('./features/text-input/text-input.component').then(m => m.TextInputComponent) },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
];