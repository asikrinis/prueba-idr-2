import { Injectable } from '@angular/core';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private http: HttpClient;

  constructor() {
    const httpBackend = new HttpXhrBackend({ build: () => new XMLHttpRequest() });
    this.http = new HttpClient(httpBackend);
  }

  getPokemon(name: string) {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
