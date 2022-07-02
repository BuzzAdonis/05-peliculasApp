import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getFeature(){
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-06-01&primary_release_date.lte=2022-06-30&api_key=ca20ac6c0e0e5e3f00e74c5e2986a3d4&language=es&include_image_language=es')
  }
}
