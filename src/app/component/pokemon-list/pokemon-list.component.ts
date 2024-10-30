import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/pokeApi.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {

  currentPageNo: number = 0;
  pokemonDetails: any [] = [];

  constructor(private pokeApiService: PokeApiService, private route: ActivatedRoute){

    
  }
  ngOnInit(): void {

    this.route.queryParamMap.subscribe((params: any)=>{

      this.setCurrentPageNo(params);
    })
    this.loadAllPokemonDetails();


  }
  setCurrentPageNo(params:any): void{
    this.currentPageNo=params.has('page')?  params.get('page'): 0;
  }
  loadAllPokemonDetails(): void{
    this.pokeApiService.getPokemonDetails(this.currentPageNo).subscribe(
      {
        next:(successResponse)=>(this.pokemonDetails=successResponse),
        error:(errorResponse)=> console.log(errorResponse)
      }
    );
  }
}
