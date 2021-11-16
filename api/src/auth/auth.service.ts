import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { RegisterDto } from "./dto/register.dto"
import { Auth, AuthDocument } from "./schemas/auth.schema"
import { hash, compare } from "bcryptjs"
import { IAnswerPromise, IAnswerService } from "./intarface"
import { LoginDto } from "./dto/login.dto"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private User: Model<AuthDocument>,
    private jwtService: JwtService
  ) {}

  async register(RegisterDto: RegisterDto): Promise<IAnswerPromise> {
    try {
      const { email, password, name, lastName, administration } = RegisterDto

      const candidate = await this.User.findOne({ email })
      if (candidate) return { message: "This user already exists" }
      const hashedPassword: string = await hash(password, 12)
      const user = new this.User({
        email,
        password: hashedPassword,
        name,
        lastName,
        administration,
      })
      await user.save()
      const access_token: string = this.jwtService.sign({
        email: user.email,
        sub: user._id,
      })
      const answerService: IAnswerService = {
        name,
        lastName,
        administration,
        userId: user._id,
        access_token: `Bearer ${access_token}`,
      }

      return answerService
    } catch (e) {
      console.log(e)
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.User.findOne({ email })
    if (user) {
      const isMatchPass: boolean = await compare(password, user.password)
      if (isMatchPass) {
        const { password, ...result } = user
        return result
      }
    }
    return null
  }

  async login(loginDto: LoginDto) {
    try {
      const user = await this.User.findOne({ email: loginDto.email })
      if (!user) return { message: "You don not have registration" }
      const isMatchPass: boolean = await compare(
        loginDto.password,
        user.password
      )
      if (!isMatchPass) return { message: "Invalid password, please try again" }
      const access_token: string = this.jwtService.sign({
        email: loginDto.email,
        sub: user._id,
      })
      const answerService: IAnswerService = {
        name: user.name,
        lastName: user.lastName,
        administration: user.administration,
        userId: user._id,
        access_token: `Bearer ${access_token}`,
      }
      return answerService
    } catch (e) {
      console.log(e)
    }
  }
}
