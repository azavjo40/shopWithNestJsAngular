import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private navbarService: NavbarService, private router: Router) {}
  isAuth: boolean = false;

  ngOnInit(): void {
    fromEvent(window, 'load').subscribe(() => {
      this.navbarService.showNavbar();
    });
    this.navbarService.subject.subscribe((value: any) => (this.isAuth = value));
  }
  logout(): void {
    this.navbarService.logout();
    this.router.navigate(['/allProduct']);
  }
}
