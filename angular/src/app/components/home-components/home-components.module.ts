import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesCarouselComponent } from './services-carousel/services-carousel.component';
import { AlliesComponent } from './allies/allies.component';



@NgModule({
  declarations: [
    HeroComponent,
    ServicesCarouselComponent,
    AlliesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ServicesCarouselComponent,
    AlliesComponent,
  ]
})
export class HomeComponentsModule { }
