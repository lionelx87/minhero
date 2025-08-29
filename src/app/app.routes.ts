import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'heroes/new',
    loadComponent: () =>
      import('./pages/hero-upsert/hero-upsert.component').then(
        (m) => m.HeroUpsertComponent
      ),
  },
  {
    path: 'heroes/:id/edit',
    loadComponent: () =>
      import('./pages/hero-upsert/hero-upsert.component').then(
        (m) => m.HeroUpsertComponent
      ),
  },
  {
    path: 'heroes/:id',
    loadComponent: () =>
      import('./pages/hero-detail/hero-detail.component').then(
        (m) => m.HeroDetailComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
