import { Routes } from '@angular/router';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo: 'pokemon-list',
        pathMatch: 'full',
    },
    {
    path: 'pokemon-list',
    component:PokemonListComponent,
   },
   {
    path: 'details-page',
    component:DetailsPageComponent,
   },

   {
    path: '**',
    redirectTo: 'pokemon-list',
   }
];
