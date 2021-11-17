import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { AuthSchema, Auth } from "src/auth/schemas/auth.schema"
import { ProductController } from "./product.controller"
import { ProductService } from "./product.service"
import { ProductSchema, Product } from "./schemas/product.schema"

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Auth.name, schema: AuthSchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
