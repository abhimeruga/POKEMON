import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PokeComponent } from './Components/poke/poke.component';
import {PokemonListService } from './services/pokemon-list.service';
import {PokemonService } from './services/pokemon.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PokemonListService,
    PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
