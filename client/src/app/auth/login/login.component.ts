import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { IformLogin } from '../intarface';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly loginService: LoginService,
    private navbarService: NavbarService,
    private router: Router
  ) {}
  form: IformLogin = { email: '', password: '' };
  changeHandler(): void {}

  ngOnInit(): void {}

  login() {
    if (this.form.email && this.form.password) {
      this.loginService.login(this.form);
      setTimeout(() => {
        this.form = { email: '', password: '' };
        this.navbarService.showNavbar();
        this.router.navigate(['/allProduct']);
      }, 2000);
    }
  }
}
