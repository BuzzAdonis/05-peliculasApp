import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { Peliculas } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textBuscar='';
  peliculas: Peliculas[]=[];
  buscarCargar=false;
  ideas:string[]=['Batman','Superman','Spiderman','Red','Ben 10'];
  constructor(private moviesService:MoviesService,
              private modalController:ModalController
              ) {}
  buscar(event:any){
    const valor = event.detail.value;
    if(!valor){
      this.buscarCargar=false;
      this.peliculas=[];
      return;
    }
    this.buscarCargar=true;
    this.moviesService.buscarPeliculas(valor).subscribe(resp=>{
      this.peliculas = resp['results'];
      this.buscarCargar=false;
    });
    
  }
  autoCompletado(idea:string){
    this.textBuscar=idea;
  }
  async verDetalle(peliculaId:number){
    const modal = await this.modalController.create({
       component:DetalleComponent,
       componentProps:{
         id:peliculaId
       }
     });
     modal.present();
   }
}
