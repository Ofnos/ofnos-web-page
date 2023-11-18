import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponentsModule } from 'src/app/components/home-components/home-components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeComponentsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
