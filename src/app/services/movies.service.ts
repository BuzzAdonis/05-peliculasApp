import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaMDB } from '../interfaces/interfaces';
const url:string=environment.urlMoviesMDB
const api_key=environment.apikeyMoviesMDB
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) { }

  getFeature(){
    //contrucion de Fecha
    const hoy =new Date();
    const ultimoDiaDelMes = new Date(hoy.getFullYear(),hoy.getMonth() + 1,0).getDate();
    const esteMes = hoy.getMonth() + 1;
    let mesString;
    if(esteMes < 10){
      mesString='0'+esteMes;
    }else{
      mesString=esteMes;
    }
    //////////////////////
    return this.http.get<RespuestaMDB>(url+'discover/movie?language=es&include_image_language=es',{
              params:{
                api_key,
                'primary_release_date.gte':`${hoy.getFullYear()}-${mesString}-01`,
                'primary_release_date.lte':`${hoy.getFullYear()}-${mesString}-${ultimoDiaDelMes}`
              }
    });
  }
}
