import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle} from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula:PeliculaDetalle={};
  ocultar=150;
  actores:Cast[]=[];
  estrella='star-outline';
  slidesOptions={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween:-5
   };
  constructor(private moviesService:MoviesService,
              private modalController:ModalController,
              private dataLocal:DataLocalService ) { }

 ngOnInit() {
 this.dataLocal.exitePelicula(this.id).then(exite=> this.estrella = exite ? 'star':'star-outline');
    this.moviesService.getPeliculaDetalle(this.id)
        .subscribe(resp=>{
          if(resp.overview.length <= 150 ){
            this.ocultar=5000;
          }
          this.pelicula= resp;
        });
        this.moviesService.getActores(this.id)
        .subscribe(resp=>{
          this.actores=resp.cast;
        });
  }
  regresar(){
    this.modalController.dismiss();
  }
  favorito(){
    const exite = this.dataLocal.guardarPelica(this.pelicula);
    this.estrella = exite ? 'star':'star-outline';
  }
}
