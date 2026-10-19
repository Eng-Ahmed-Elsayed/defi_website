import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'capabilities',
    loadComponent: () => import('./features/capabilities/capabilities.component').then(m => m.CapabilitiesComponent)
  },
  {
    path: 'sectors',
    loadComponent: () => import('./features/sectors/sectors.component').then(m => m.SectorsComponent)
  },
  {
    path: 'impact',
    loadComponent: () => import('./features/impact/impact.component').then(m => m.ImpactComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./features/news/news.component').then(m => m.NewsComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./features/careers/careers.component').then(m => m.CareersComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
