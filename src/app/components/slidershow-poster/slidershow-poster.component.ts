import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidershow-poster',
  templateUrl: './slidershow-poster.component.html',
  styleUrls: ['./slidershow-poster.component.scss'],
})
export class SlidershowPosterComponent implements OnInit {
  @Input() peliculas:PeliculaDetalle[]=[];
  slidesOptions={
    slidesPerView:1.6,
    freeMode:true
   };
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
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
