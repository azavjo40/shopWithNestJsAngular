import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ERRORMESSAGE } from './type';

@Injectable()
export class CoreAcsions {
  constructor(private store: Store) {}
  errorMessage(item: any) {
    this.store.dispatch({ type: ERRORMESSAGE, payload: item });
    setTimeout(() => {
      this.store.dispatch({ type: ERRORMESSAGE, payload: '' });
    }, 3000);
  }
}
