import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/modals/pokemon/pokemon.module';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent {

  @Input() pokemon!: Pokemon;

  getPokemonId() {
    return this.pokemon.url.split("/").reverse()[1];
  }
  getPokemonImg() {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.getPokemonId() + ".png";
  }

}
