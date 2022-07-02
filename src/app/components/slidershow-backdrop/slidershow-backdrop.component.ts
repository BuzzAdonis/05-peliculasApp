import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidershow-backdrop',
  templateUrl: './slidershow-backdrop.component.html',
  styleUrls: ['./slidershow-backdrop.component.scss'],
})
export class SlidershowBackdropComponent implements OnInit {

  @Input() peliculas:Peliculas[]=[];
  slidesOptions={
    slidesPerView:1.3,
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
