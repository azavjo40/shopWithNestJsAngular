import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.modules';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AlertComponent } from './alert/alert.component';
import { NavbarService } from './navbar/navbar.service';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AlertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ProductsModule,
    HttpClientModule,
    CoreModule,
    OrdersModule,
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
