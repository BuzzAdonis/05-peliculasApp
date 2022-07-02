import { Component, Input, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slidershow-poster',
  templateUrl: './slidershow-poster.component.html',
  styleUrls: ['./slidershow-poster.component.scss'],
})
export class SlidershowPosterComponent implements OnInit {
  @Input() peliculas:Peliculas[]=[];
  slidesOptions={
    slidesPerView:3.3,
    freeMode:true
   };
  constructor() { }

  ngOnInit() {}

}
