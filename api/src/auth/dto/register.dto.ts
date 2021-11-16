import { IsString, IsEmail, IsBoolean } from "class-validator"
export class RegisterDto {
  @IsEmail()
  readonly email: string
  @IsString()
  readonly password: string
  @IsString()
  readonly name: string
  @IsString()
  readonly lastName: string
  @IsBoolean()
  readonly administration: boolean
}
