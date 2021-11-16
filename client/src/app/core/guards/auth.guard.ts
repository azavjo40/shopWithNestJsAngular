import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LOCALUSERDATA } from 'src/app/constants';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private navbarService: NavbarService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const storage: any = JSON.parse(localStorage.getItem(LOCALUSERDATA) as any);
    this.navbarService.showNavbar();
    if (storage && storage.access_token) {
      return true;
    } else {
      return false;
    }
  }
}
