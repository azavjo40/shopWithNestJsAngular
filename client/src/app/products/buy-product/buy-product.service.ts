import { Injectable } from '@angular/core';
import { SERVICEURL } from 'src/app/constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CoreAcsions } from 'src/app/core/reducers/core.acsions';
import { LOCALBUYADDRESS } from '../constants';
import { IFormBuyProduct, ILcalBuyAddress } from '../interface';
@Injectable({
  providedIn: 'root',
})
export class BuyProductService {
  constructor(private http: HttpClient, private coreAcsions: CoreAcsions) {}
  buyProduct(form: IFormBuyProduct) {
    this.localBuyAddressSet({
      name: form.name,
      phone: form.phone,
      address: form.address,
    });
    this.http
      .post(`${SERVICEURL}product/buyProduct`, form)
      .pipe(
        map((item: any) => {
          if (item && item.message) {
            this.coreAcsions.errorMessage(item.message);
          }
        })
      )
      .subscribe();
  }

  localBuyAddressSet(form: ILcalBuyAddress): void {
    localStorage.setItem(LOCALBUYADDRESS, JSON.stringify(form));
  }

  localBuyAddressGet(): ILcalBuyAddress {
    return JSON.parse(localStorage.getItem(LOCALBUYADDRESS) as any);
  }
}
