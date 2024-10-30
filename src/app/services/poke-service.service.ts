import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  private baseUrl= 'https://pokeapi.co/api/v2/pokemon'

  constructor(private httpClint: HttpClient) {}

  getPokemonDetails(pageNo: number):Observable<any>{

    const url = `${this.baseUrl}?=${pageNo*20}&limit=20`;
    return this.getPokemonList(url).pipe(
      switchMap((response)=>
        forkJoin(
          response.results.map((pokemon: any)=>
          this.getPokemonIndividualDetailsByName(pokemon.name)
          )
        )
    )
    );
      
  }

  getPokemonList(url: string):Observable<any> {
    return this.httpClint.get<any>(url);
  }

  getPokemonIndividualDetailsByName(name: string): Observable <any>{
    const url = `${this.baseUrl}/${name}`;

    return this.getPokemonList(url);
  }
}
