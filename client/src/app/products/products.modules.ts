import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateProductService } from './create-product/create-product.service';
import { AllProductComponent } from './all-product/all-product.component';
import { AllProductCardComponent } from './all-product-card/all-product-card.component';
import { BasketProductsComponent } from './basket-products/basket-products.component';
import { BasketProductsService } from './basket-products/basket-products.service';
import { BasketProductsCardComponent } from './basket-products-card/basket-products-card.component';
import { BuyProductService } from './buy-product/buy-product.service';

@NgModule({
  declarations: [
    CreateProductComponent,
    BuyProductComponent,
    AllProductComponent,
    AllProductCardComponent,
    BasketProductsComponent,
    BasketProductsCardComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
  providers: [CreateProductService, BasketProductsService, BuyProductService],
})
export class ProductsModule {}
