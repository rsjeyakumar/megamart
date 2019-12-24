import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';

import { BuyProductsComponent } from './buy-products/buy-products.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LandingComponent, BuyProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, SharedModule
  ]
})
export class HomeModule { }
