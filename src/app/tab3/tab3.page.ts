import { Component } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
  peliculas:PeliculaDetalle[]=[];
  generos:Genre[]=[];
  favoritosGenero:any[]=[];

  constructor(private dataLocalService:DataLocalService,
              private moviesService:MoviesService) {}
async ionViewWillEnter(){
  this.peliculas = await this.dataLocalService.cargarFovoritos();
  this.generos = await this.moviesService.cargarGenero();
  this.peliPorGenero(this.generos,this.peliculas);
}
  peliPorGenero(generos:Genre[], peliculas:PeliculaDetalle[]){
    generos.forEach(genero=>{
      this.favoritosGenero.push({
        genero:genero.name,
        pelis:peliculas.filter(peli=>{
          return peli.genres.find(genre => genre.id === genero.id);
        })
      });
    });
  }
}
