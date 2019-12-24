import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardTransactionsComponent } from './card-transactions/card-transactions.component';
import { AuthGuard } from 'src/app/shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CardTransactionsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
