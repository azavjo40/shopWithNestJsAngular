import { Component, OnInit } from '@angular/core';
import { BasketProductsService } from './basket-products.service';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-basket-products',
  templateUrl: './basket-products.component.html',
  styleUrls: ['./basket-products.component.scss'],
})
export class BasketProductsComponent implements OnInit {
  constructor(private basketProductsService: BasketProductsService) {}
  basketP: [] = [];
  ngOnInit(): void {
    fromEvent(window, 'load').subscribe(() => this.getBasket());
    fromEvent(document, 'click').subscribe(() => this.getBasket());
  }
  getBasket(): void {
    this.basketP = this.basketProductsService.getBasket();
  }
}
