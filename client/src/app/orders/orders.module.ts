import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';
import { OrdersCardComponent } from './orders-card/orders-card.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { BuyService } from './buy/buy.service';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  imports: [CommonModule, OrdersRoutingModule, FormsModule],
  declarations: [OrdersComponent, OrdersCardComponent, BuyComponent],
  providers: [OrdersService, BuyService],
})
export class OrdersModule {}
