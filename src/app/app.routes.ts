import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', //change the path name next time to change pages (for now)
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
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'recipes',
        loadComponent: () =>  import('./second-page/second-page.page').then( m => m.SecondPagePage)
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then( m => m.HomePage)
      }
    ]
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
];
