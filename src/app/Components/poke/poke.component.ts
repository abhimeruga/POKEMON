import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';
import {PokemonListService} from '../../services/pokemon-list.service';
@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.scss']
})
export class PokeComponent implements OnInit {

  public loading = true;
  constructor(private location: Location, private pls: PokemonListService) { }
  public pokemon = {};
  ngOnInit() {
    this.pls.getPokemon(this.pls.pokemonURL).subscribe(data => {
      console.log(data);
      this.pokemon = data;
      this.loading = false;
    });
  }
  goBack() {
    this.location.back();
  }

}
