import { Component, Input, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';

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
  constructor() { }

  ngOnInit() {}

}
