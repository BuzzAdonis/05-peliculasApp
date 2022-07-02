import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidershowBackdropComponent} from "./slidershow-backdrop/slidershow-backdrop.component";
import { PipesModule } from '../pipes/pipes.module';
import { SlidershowPosterComponent } from './slidershow-poster/slidershow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
 SlidershowBackdropComponent,
 SlidershowPosterComponent,
 SlideshowParesComponent,
 DetalleComponent
  ],
  exports:[
    SlidershowBackdropComponent,
    SlidershowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
