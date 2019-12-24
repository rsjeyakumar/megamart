import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewOrdersComponent } from './view-orders.component';
import { AuthGuard } from 'src/app/shared/services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ViewOrdersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewOrdersRoutingModule { }
