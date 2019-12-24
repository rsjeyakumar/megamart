import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { CardTransactionsComponent } from './card-transactions/card-transactions.component';

@NgModule({
  declarations: [CardTransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule, SharedModule
  ]
})
export class TransactionsModule { }
