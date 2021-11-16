import { Component, Input, OnInit } from '@angular/core';
import { SERVICEURL } from 'src/app/constants';
import { BasketProductsService } from '../basket-products/basket-products.service';

@Component({
  selector: 'app-basket-products-card',
  templateUrl: './basket-products-card.component.html',
  styleUrls: ['./basket-products-card.component.scss'],
})
export class BasketProductsCardComponent implements OnInit {
  constructor(private basketProductsService: BasketProductsService) {
    this.basket = '';
  }
  SERVICEURL = SERVICEURL;
  ngOnInit(): void {}
  @Input() basket: any;
  remove(product: any) {
    this.basketProductsService.remove(product);
  }
}
