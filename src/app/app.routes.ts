import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'second-page',
    loadComponent: () => import('./second-page/second-page.page').then( m => m.SecondPagePage)
  },
  {
    path: 'third-page',
    loadComponent: () => import('./third-page/third-page.page').then( m => m.ThirdPagePage)
  },
];
