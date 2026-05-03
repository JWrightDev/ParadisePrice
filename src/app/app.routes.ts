import { Routes } from '@angular/router';
import { Home } from './component/pages/home/home';
import { Notfound } from './component/pages/notfound/notfound';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home'
  },
  {
    path: '**',
    component: Notfound,
    title: '404 Not Found'
  }
];
