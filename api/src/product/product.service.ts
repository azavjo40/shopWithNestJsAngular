import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Auth, AuthDocument } from "src/auth/schemas/auth.schema"
import { ProductDto } from "./dto/create.dto"
import { IAnswerMessage, IBuyProductOrder } from "./intarface"
import { Product, ProductDocument } from "./schemas/product.schema"
import { unlinkSync } from "fs"
import { BuyProduct, BuyProductDocument } from "./schemas/buyProduct.schema"
import { BuyProductDto } from "./dto/buyProduct.dto"
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly Product: Model<ProductDocument>,
    @InjectModel(Auth.name) private User: Model<AuthDocument>,
    @InjectModel(BuyProduct.name) private buyPro: Model<BuyProductDocument>
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
      const productd = await this.Product.find()
      return productd
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

  async allOrders(userId: string) {
    try {
      return await this.buyPro.find({ userId })
    } catch (e) {
      console.log(e)
    }
  }

  async buyProduct(body: BuyProductDto | any): Promise<IAnswerMessage> {
    try {
      const result = body.order.reduce(
        (items: any, { userId, name, type, cost }) => {
          if (!(userId in items)) items[userId] = []
          items[userId].push({ userId, name, type, cost })
          return items
        },
        {}
      )
      for (let x in result) {
        const totalAmount = result[x].reduce((our: number, item: any) => {
          return parseInt(item.cost) + our
        }, 0)
        const items: IBuyProductOrder = {
          name: body.name,
          phone: body.phone,
          address: body.address,
          totalAmount,
          userId: result[x][0].userId,
          order: result[x],
        }
        await new this.buyPro(items).save()
      }
      return { message: "Thank you wait for delivery" }
    } catch (e) {
      console.log(e)
    }
  }

  async buyPurchaseHistory(phone: string): Promise<BuyProductDto[]> {
    try {
      const buyProHistory = await this.buyPro.find({ phone })
      return buyProHistory
    } catch (e) {
      console.log(e)
    }
  }
}
