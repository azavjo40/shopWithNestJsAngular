import { Module } from "@nestjs/common"
import { AuthController } from "./auth.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { Auth, AuthSchema, AuthDocument } from "./schemas/auth.schema"
import { AuthService } from "./auth.service"
import { AuthGuard, PassportModule } from "@nestjs/passport"
import { LocalStrategy } from "./strategies/local.strategy"
import { JwtModule } from "@nestjs/jwt"
import { jwtConstants } from "./constants"
import { JwtStrategy } from "./strategies/jwt.strategy"
import { AdminGuard } from "./guards/admin.guard"
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, AdminGuard],
  exports: [JwtStrategy, AdminGuard, AuthService],
})
export class AuthModule {}
