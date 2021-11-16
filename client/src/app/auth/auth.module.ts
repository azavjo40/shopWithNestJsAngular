import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { AuthService } from './auth.service';
import { CoreAcsions } from '../core/reducers/core.acsions';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [LoginService, RegisterService, AuthService, CoreAcsions],
})
export class AuthModule {}
