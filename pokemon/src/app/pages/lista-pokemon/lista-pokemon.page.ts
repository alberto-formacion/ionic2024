import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { scale, caretUp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.page.html',
  styleUrls: ['./lista-pokemon.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaPokemonPage {

  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 20;
  loading: boolean = false;
  isModalOpen: boolean = false;
  pokemon?: any;

  constructor(private http: HttpClient) {
    addIcons({scale, caretUp})
  }

  ngOnInit(): void {
    this.loadPokemons();
  }

  verPokemon(pokemon: any){
    this.pokemon = pokemon;
    this.abrirCerrarModal(true);
    console.log(pokemon)
  }

  abrirCerrarModal(estado: boolean){
    this.isModalOpen = estado;
  }

  loadPokemons(event?: any): void {
    if (this.loading) return;
    this.loading = true;

    this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
      .subscribe((response: any) => {
        //this.pokemons = [...this.pokemons, ...response.results];
        response.results.forEach((pokemon:any) => {
          this.http.get(pokemon.url).subscribe((detalle:any) =>{
            this.pokemons.push(detalle)
            console.log(this.pokemons);
          });
          
        });

        this.loading = false;
        this.offset += this.limit;

        console.log(response);

        if (event) {
          event.target.complete();
          if (response.results.length < this.limit) {
            event.target.disabled = true;
          }
        }
      });
  }

}
