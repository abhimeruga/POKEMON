import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  public pokemonURL = '';
  constructor(private http: HttpClient) { }
  public getAllPokemon(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1000');
  }
  public setPokemonURL(url) {
    this.pokemonURL = url;
  }
  public getPokemon(url): Observable<any> {
    return this.http.get(url);
  }
}
