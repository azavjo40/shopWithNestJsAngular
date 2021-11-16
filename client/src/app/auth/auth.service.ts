import { Injectable } from '@angular/core';
import { LOCALUSERDATA } from '../constants';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  saveToLocalStorage(item: any): void {
    localStorage.setItem(LOCALUSERDATA, JSON.stringify(item) as any);
  }
}
