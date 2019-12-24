import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrdersComponent } from './view-orders.component';

import { ViewOrdersRoutingModule } from './view-orders-routing.module';


@NgModule({
  declarations: [ViewOrdersComponent],
  imports: [
    CommonModule,
    ViewOrdersRoutingModule
  ]
})
export class ViewOrdersModule { }
