import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle} from 'src/app/interfaces/interfaces';
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
  slidesOptions={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween:-5
   };
  constructor(private moviesService:MoviesService,
              private modalController:ModalController) { }

  ngOnInit() {
    this.moviesService.getPeliculaDetalle(this.id)
        .subscribe(resp=>{
          if(resp.overview.length <= 150 ){
            this.ocultar=5000;
          }
          console.log(resp);
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
}
