import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'lista-productos',
    pathMatch: 'full',
  },
  {
    path: 'lista-productos',
    loadComponent: () => import('./pages/lista-productos/lista-productos.page').then( m => m.ListaProductosPage)
  },
];
