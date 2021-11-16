import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';
import { OrdersCardComponent } from './orders-card/orders-card.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersComponent, OrdersCardComponent],
  imports: [CommonModule, OrdersRoutingModule],
  providers: [OrdersService],
})
export class OrdersModule {}
