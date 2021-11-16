import { Component, Input, OnInit } from '@angular/core';
import { SERVICEURL } from 'src/app/constants';
import { BasketProductsService } from '../basket-products/basket-products.service';

@Component({
  selector: 'app-all-product-card',
  templateUrl: './all-product-card.component.html',
  styleUrls: ['./all-product-card.component.scss'],
})
export class AllProductCardComponent implements OnInit {
  constructor(private basketProductsService: BasketProductsService) {
    this.product = '';
  }
  SERVICEURL: string = SERVICEURL;
  @Input() product: any;
  ngOnInit(): void {}

  addBasket(product: any): void {
    this.basketProductsService.addBasket(product);
    this.basketProductsService.getBasket();
  }
}
