import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas:PeliculaDetalle[]=[];
  constructor(private storage:Storage,
              private toastController:ToastController) { 
                this.cargarFovoritos();
              }

  guardarPelica(pelicula:PeliculaDetalle){
    let exite=false;
    let mensaje='';
    for(const peli of this.peliculas){
      if(peli.id===pelicula.id){
        exite=true;
        break;
      }
    }
    if(exite){
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id)
      mensaje='Remover de Favoritos'
    }else{
      this.peliculas.push(pelicula);
      mensaje='Agregar a Favoritos'
    }
    this.presenToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
    return !exite;
  }

  async presenToast(message:string){
    const toast = await this.toastController.create({
      message,
      duration:1500
    });
    toast.present();
  }
 async cargarFovoritos(){
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }
 async exitePelicula(id:number){
    await this.cargarFovoritos();
    const exite =this.peliculas.find(peli=>peli.id===id);
    return exite ? true: false;
  }
}
