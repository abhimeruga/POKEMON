import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokeComponent} from './Components/poke/poke.component';
import {HomeComponent} from './Components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'pokemon', component: PokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
