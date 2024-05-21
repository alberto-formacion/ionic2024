import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'primera-pagina',
    loadComponent: () => import('./primera-pagina/primera-pagina.page').then( m => m.PrimeraPaginaPage)
  },
  {
    path: 'segunda-pagina',
    loadComponent: () => import('./segunda-pagina/segunda-pagina.page').then( m => m.SegundaPaginaPage)
  },
  {
    path: 'segunda-pagina/:id',
    loadComponent: () => import('./segunda-pagina/segunda-pagina.page').then( m => m.SegundaPaginaPage)
  }
];
