import { Component, OnInit } from '@angular/core';
import { BasketProductsService } from '../basket-products/basket-products.service';
import { BuyProductService } from './buy-product.service';
import { Router } from '@angular/router';
import { IFormBuyProduct, ILcalBuyAddress } from '../interface';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
})
export class BuyProductComponent implements OnInit {
  constructor(
    private buyProductService: BuyProductService,
    private basketProductsService: BasketProductsService,
    private router: Router
  ) {}

  dataAddress: ILcalBuyAddress = this.buyProductService.localBuyAddressGet();

  form: IFormBuyProduct = {
    name: this.dataAddress ? this.dataAddress.name : '',
    phone: this.dataAddress ? this.dataAddress.phone : '',
    address: this.dataAddress ? this.dataAddress.address : '',
    totalAmount: '0',
    order: [],
  };
  ngOnInit(): void {
    this.chageDataBasket();
  }
  changeHandler(): void {}

  buyProduct() {
    if (parseInt(this.form.totalAmount) > 0) {
      this.buyProductService.buyProduct(this.form);
      setTimeout(() => {
        this.form = {
          name: '',
          phone: '',
          address: '',
          totalAmount: '',
          order: [],
        };
        this.basketProductsService.clearSorage();
        this.router.navigate(['/allProduct']);
      }, 3000);
    }
  }

  chageDataBasket() {
    const storage: any = this.basketProductsService.getBasket();
    this.form.order = storage;
    this.form.totalAmount = storage
      .reduce((state: number, item: any) => {
        return state + parseInt(item.cost);
      }, 0)
      .toString();
  }
}
