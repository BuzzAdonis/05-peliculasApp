import { Pipe, PipeTransform } from '@angular/core';
import { Peliculas } from '../interfaces/interfaces';

@Pipe({
  name: 'filtroImagen'
})
export class FiltroImagenPipe implements PipeTransform {

  transform(peliculas:Peliculas[]): Peliculas[] {
    return peliculas.filter(peli=>{
      return peli.backdrop_path;
    });
  }

}
