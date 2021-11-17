import { Component, OnInit } from '@angular/core';
import { BasketProductsService } from '../../products/basket-products/basket-products.service';
import { BuyService } from './buy.service';
import { Router } from '@angular/router';
import { IFormBuyProduct, ILcalBuyAddress } from '../../products/interface';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent implements OnInit {
  constructor(
    private buyService: BuyService,
    private basketProductsService: BasketProductsService,
    private router: Router
  ) {}

  dataAddress: ILcalBuyAddress = this.buyService.localBuyAddressGet();

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
      this.buyService.buyProduct(this.form);
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
