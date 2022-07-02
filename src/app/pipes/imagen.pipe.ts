import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL:String =environment.imagenMoviesMDBUrl;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img:string, size:string='original'): string {
    if(!img){
      return'./assets/no-image-banner.jpg';
    }
    const imgUrl:string =`${URL}/${size}${img}`;
    return imgUrl;
  }

}
