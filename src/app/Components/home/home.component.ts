import { Component, OnInit } from '@angular/core';
import {PokemonListService} from '../../services/pokemon-list.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemonList;
  public pokemonListDummy;
  public loading = true;
  constructor(private pls: PokemonListService, private router: Router) { }

  ngOnInit() {
    this.pls.getAllPokemon().subscribe(data => {
      this.pokemonList = data.results;
      this.pokemonListDummy = data.results;
      this.loading = false;
    });
  }
  public getPokemonDetails(value) {
    console.log(value);
    this.pls.setPokemonURL(value);
    this.router.navigate(['/pokemon']);
  }
  public search(value) {
    this.pokemonList = this.pokemonListDummy;
    this.pokemonList = this.pokemonListDummy.filter(data => {
      return data['name'].includes(value);
    });
    console.log(this.pokemonList);

  }

}
