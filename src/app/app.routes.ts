import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'TVS - Home' },
      {
        path: 'transportation',
        title: 'TVS - Transportation',
        loadComponent: () =>
          import('./transportation/transportation.component').then(m => m.TransportationComponent)
      },
    ]
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: NotFoundComponent,
  }
];
