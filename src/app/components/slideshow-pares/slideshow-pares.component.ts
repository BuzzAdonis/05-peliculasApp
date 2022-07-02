import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas:Peliculas[]=[];
  @Output() cargarMas= new EventEmitter;
  slidesOptions={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween:-20
   };
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
  onClick(){
    this.cargarMas.emit();
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
