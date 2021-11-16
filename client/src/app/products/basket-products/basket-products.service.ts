import { Injectable } from '@angular/core';
import { LOCALBASKETDATA } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class BasketProductsService {
  constructor() {}

  getBasket(): any {
    const localBasket: [] = JSON.parse(
      localStorage.getItem(LOCALBASKETDATA) as any
    );
    if (localBasket) return localBasket;
  }

  addBasket(product: any): void {
    product.date = Date.now();
    const localBasket: [] = JSON.parse(
      localStorage.getItem(LOCALBASKETDATA) as any
    );
    if (localBasket) {
      localStorage.setItem(
        LOCALBASKETDATA,
        JSON.stringify([...localBasket, product])
      );
    } else {
      localStorage.setItem(LOCALBASKETDATA, JSON.stringify([product]));
    }
  }

  remove(product: any): void {
    const localBasket: [] = JSON.parse(
      localStorage.getItem(LOCALBASKETDATA) as any
    );
    if (product) {
      const resultLocal: any = localBasket.filter(
        (item: any) => item.date !== product.date
      );
      localStorage.setItem(LOCALBASKETDATA, JSON.stringify(resultLocal));
    }
  }

  clearSorage(): void {
    localStorage.removeItem(LOCALBASKETDATA);
  }
}
