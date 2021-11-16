import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { AuthModule } from "src/auth/auth.module"
import { AuthService } from "src/auth/auth.service"
import { AuthSchema, Auth } from "src/auth/schemas/auth.schema"
import { ProductController } from "./product.controller"
import { ProductService } from "./product.service"
import { BuyProduct, BuyProductSchema } from "./schemas/buyProduct.schema"
import { ProductSchema, Product } from "./schemas/product.schema"

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Auth.name, schema: AuthSchema },
      { name: BuyProduct.name, schema: BuyProductSchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
