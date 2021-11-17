import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { BuyComponent } from './buy/buy.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: 'allOrders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'buyProduct', component: BuyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
