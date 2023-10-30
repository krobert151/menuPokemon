import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modals/pokemon/pokemon.module';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  PokemonList: Pokemon[] = [];
  constructor(private pokeService:PokemonService){}
  ngOnInit(): void {
    this.pokeService.getPokemonList().subscribe(resp=>{
      this.PokemonList = resp.results;
    })
  }
}
