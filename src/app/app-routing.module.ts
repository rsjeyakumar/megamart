import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';


export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./module/login/login.module').then(log => log.LoginModule)
  },
  {
    path: '', redirectTo: 'products', pathMatch: 'full'

  },
  {
    path: 'products',
    loadChildren: () => import('./module/home/home.module').then(home => home.HomeModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./module/transactions/transactions.module').then(transaction => transaction.TransactionsModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./module/home/view-orders/view-orders.module').then(myorder => myorder.ViewOrdersModule)
  }
];
// canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModuleRoutingModule { }
