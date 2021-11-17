import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AllProductComponent } from './all-product/all-product.component';
import { BasketProductsComponent } from './basket-products/basket-products.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  { path: 'allProduct', component: AllProductComponent },
  {
    path: 'cretaeProduct',
    component: CreateProductComponent,
    canActivate: [AuthGuard],
  },
  { path: 'basketProducts', component: BasketProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
