import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common"
import { AuthService } from "./auth.service"
import { LoginDto } from "./dto/login.dto"
import { RegisterDto } from "./dto/register.dto"
import { AdminGuard } from "./guards/admin.guard"
import { IAnswerPromise } from "./intarface"
import { ValidationPipe } from "./pipes/validation.pipe"
import { LocalStrategy } from "./strategies/local.strategy"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("/register")
  @HttpCode(HttpStatus.CREATED)
  @Header("Cach-Control", "none")
  register(
    @Body(new ValidationPipe()) registerDto: RegisterDto
  ): Promise<IAnswerPromise> {
    return this.authService.register(registerDto)
  }

  @UseGuards(LocalStrategy)
  @Post("/login")
  @HttpCode(HttpStatus.CREATED)
  @Header("Cach-Control", "none")
  login(@Body(new ValidationPipe()) loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }
}
