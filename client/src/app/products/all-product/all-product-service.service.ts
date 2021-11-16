import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICEURL } from 'src/app/constants';
@Injectable({
  providedIn: 'root',
})
export class AllProductServiceService {
  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get(`${SERVICEURL}product/getAll`);
  }
}
