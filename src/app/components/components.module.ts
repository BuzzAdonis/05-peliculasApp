import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidershowBackdropComponent} from "./slidershow-backdrop/slidershow-backdrop.component";
import { PipesModule } from '../pipes/pipes.module';
import { SlidershowPosterComponent } from './slidershow-poster/slidershow-poster.component';


@NgModule({
  declarations: [
 SlidershowBackdropComponent,
 SlidershowPosterComponent
  ],
  exports:[
    SlidershowBackdropComponent,
    SlidershowPosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
