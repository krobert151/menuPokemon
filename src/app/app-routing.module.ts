import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { BerriesListComponent } from './components/berries-list/berries-list.component';

const routes: Routes = [
  {path: 'pokedex', component: PokemonListComponent},
  {path: 'berries', component: BerriesListComponent},
  {path: '',pathMatch:'full' , redirectTo:'/pokedex'},
  {path: '**' , component: PokemonListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
