import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesCarouselComponent } from './services-carousel/services-carousel.component';
import { AlliesComponent } from './allies/allies.component';
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [
    HeroComponent,
    ServicesCarouselComponent,
    AlliesComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    HeroComponent,
    ServicesCarouselComponent,
    AlliesComponent,
  ]
})
export class HomeComponentsModule { }
