import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOCALUSERDATA, SERVICEURL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  allOrders() {
    const storage: any = JSON.parse(localStorage.getItem(LOCALUSERDATA) as any);
    return this.http.get(`${SERVICEURL}orders/allOrders/${storage.userId}`);
  }
}
