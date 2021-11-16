import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./auth/auth.module"
import { MongooseModule } from "@nestjs/mongoose"
import { mongoDb } from "./constants"
import { PassportModule } from "@nestjs/passport"
import { ProductModule } from "./product/product.module"
import { MulterModule } from "@nestjs/platform-express"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"
@Module({
  imports: [
    MulterModule.register({ dest: "./upload" }),
    AuthModule,
    ProductModule,
    PassportModule,
    MongooseModule.forRoot(mongoDb.url),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, ".."),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
