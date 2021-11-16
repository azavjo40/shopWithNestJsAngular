import { Injectable } from '@angular/core';
import { LOCALUSERDATA, SERVICEURL } from 'src/app/constants';
import { ICreateProduct } from '../interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CoreAcsions } from 'src/app/core/reducers/core.acsions';

@Injectable({
  providedIn: 'root',
})
export class CreateProductService {
  constructor(private http: HttpClient, private coreAcsions: CoreAcsions) {}
  create(form: ICreateProduct) {
    const storage = JSON.parse(localStorage.getItem(LOCALUSERDATA) as any);
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('type', form.type);
    formData.append('cost', form.cost);
    formData.append('paragraph', form.paragraph);
    formData.append('userId', storage.userId);
    formData.append('image', form.image);
    this.http
      .post(`${SERVICEURL}product/create`, formData)
      .pipe(
        map((item: any) => {
          if (item && item.message) {
            this.coreAcsions.errorMessage(item.message);
          }
        })
      )
      .subscribe();
  }
}
