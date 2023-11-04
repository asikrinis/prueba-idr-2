import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MemesService } from 'src/app/core/services/memes-service.service';

@Component({
  standalone: true,
  selector: 'app-list-meme',
  templateUrl: './list-meme.component.html',
  styleUrls: ['./list-meme.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})

export default class ListMemeComponent{

  pokemonData: any;
  searchForm: FormGroup;

  constructor(private pokemonService: MemesService) {
    this.searchForm = new FormGroup({
      pokemonName: new FormControl('')
    });
  }

  searchPokemon() {
    const control = this.searchForm.get('pokemonName');
    const name = control && control.value ? control.value.trim() : '';
    if (name) {
        this.getPokemonDetails(name);
    }
  }

  getPokemonDetails(name: string) {
    this.pokemonService.getPokemon(name).subscribe(
      data => {
        this.pokemonData = data;
      }
    );
  }
}

