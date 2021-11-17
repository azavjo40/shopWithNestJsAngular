import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ProductDto } from "./dto/create.dto"
import { IAnswerMessage } from "./intarface"
import { Product, ProductDocument } from "./schemas/product.schema"
import { unlinkSync } from "fs"
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly Product: Model<ProductDocument>
  ) {}
  async create(body: ProductDto): Promise<IAnswerMessage> {
    try {
      const { name, type, cost, paragraph, userId, image } = body
      await new this.Product({
        name,
        type,
        cost,
        paragraph,
        userId,
        image: image ? image : "",
      }).save()
      return { message: "Create product" }
    } catch (e) {
      console.log(e)
    }
  }

  async getAll(): Promise<ProductDto[]> {
    try {
      return await this.Product.find()
    } catch (e) {
      console.log(e)
    }
  }

  async patch(body: any) {
    try {
      const { name, type, cost, paragraph, userId, image, _id } = body
      const product = await this.Product.findById(_id)
      if (product) {
        const update = {
          name: name ? name : product.name,
          type: type ? type : product.type,
          cost: cost ? cost : product.cost,
          paragraph: paragraph ? paragraph : product.paragraph,
          userId: userId ? userId : product.userId,
          image: image ? image : product.image,
        }
        await this.Product.updateOne({ _id }, { $set: update }, { new: true })
        if (image) unlinkSync(product.image)
        return { message: "You update product" }
      }
    } catch (e) {
      console.log(e)
    }
  }

  async removeById(_id: string): Promise<IAnswerMessage> {
    try {
      await this.Product.findOneAndDelete({ _id })
      return { message: "You delete product !" }
    } catch (e) {
      console.log(e)
    }
  }
}
