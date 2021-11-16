import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { IFormRegister } from '../intarface';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private navbarService: NavbarService,
    private router: Router
  ) {}
  form: IFormRegister = {
    name: '',
    lastName: '',
    age: '',
    administration: true,
    email: '',
    password: '',
  };
  changeHandler(): void {}
  ngOnInit(): void {}
  register() {
    if (this.form.email && this.form.password) {
      this.registerService.register(this.form);
      setTimeout(() => {
        this.form = {
          name: '',
          lastName: '',
          age: '',
          administration: false,
          email: '',
          password: '',
        };
        this.navbarService.showNavbar();
        this.router.navigate(['/allProduct']);
      }, 2000);
    }
  }
}
