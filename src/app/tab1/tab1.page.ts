import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements  OnInit {
 peliculasRcientes: Peliculas[]=[];
 populares:Peliculas[]=[];
  constructor(private moviesService:MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getFeature().subscribe(resp =>{
      this.peliculasRcientes =resp.results;
    });
    this.getPopulares();
  }
  cargarMas(){
    this.getPopulares();
  }
  getPopulares(){
    this.moviesService.getPopulares().subscribe(resp =>{
      //this.populares.push(...resp.results)
      const arrayTmp=[...this.populares,...resp.results];
      this.populares =arrayTmp;
    });
  }

}
