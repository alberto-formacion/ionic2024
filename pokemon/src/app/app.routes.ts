import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-pokemon',
    pathMatch: 'full',
  },
  {
    path: 'lista-pokemon',
    loadComponent: () => import('./pages/lista-pokemon/lista-pokemon.page').then( m => m.ListaPokemonPage)
  },
];
