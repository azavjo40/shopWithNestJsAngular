import { Injectable } from '@angular/core';
import { LOCALUSERDATA } from '../constants';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  subject: any = new Subject();
  showNavbar(): void {
    const storege = JSON.parse(localStorage.getItem(LOCALUSERDATA) as any);
    if (storege && storege.access_token) {
      this.subject.next(true);
    } else {
      this.subject.next(false);
    }
  }
  logout(): void {
    localStorage.removeItem(LOCALUSERDATA);
    this.showNavbar();
  }
}
