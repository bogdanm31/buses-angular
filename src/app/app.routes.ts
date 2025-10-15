import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadComponent() {
    return import('./views/home/home.component').then(
      m => m.HomeComponent
    )
  }
}];
