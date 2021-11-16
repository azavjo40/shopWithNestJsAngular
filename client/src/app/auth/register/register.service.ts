import { Injectable } from '@angular/core';
import { IFormRegister } from '../intarface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { CoreAcsions } from 'src/app/core/reducers/core.acsions';
import { SERVICEURL } from 'src/app/constants';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private coreAcsions: CoreAcsions
  ) {}
  register(form: IFormRegister): void {
    try {
      this.http
        .post<any>(`${SERVICEURL}auth/register`, form)
        .pipe(
          map((item) => {
            if (item.message) {
              this.coreAcsions.errorMessage(item.message);
            } else {
              this.authService.saveToLocalStorage(item);
            }
          })
        )
        .subscribe();
    } catch (e) {
      console.log(e);
    }
  }
}
