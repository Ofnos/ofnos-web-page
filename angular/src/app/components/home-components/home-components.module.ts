import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesCarouselComponent } from './services-carousel/services-carousel.component';



@NgModule({
  declarations: [
    HeroComponent,
    ServicesCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ServicesCarouselComponent
  ]
})
export class HomeComponentsModule { }
