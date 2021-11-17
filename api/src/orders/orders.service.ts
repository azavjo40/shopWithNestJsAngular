import { Injectable } from "@nestjs/common"
import { IAnswerMessage, IOrders } from "./intarface"
import { OrdersDto } from "./dto/orders.dto"
import { Orders, OrdersDocument } from "./schemas/orders.schema"
import { Model } from "mongoose"
import { InjectModel } from "@nestjs/mongoose"
@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Orders.name) private orders: Model<OrdersDocument>
  ) {}

  async allOrders(userId: string) {
    try {
      return await this.orders.find({ userId })
    } catch (e) {
      console.log(e)
    }
  }

  async buy(body: OrdersDto | any): Promise<IAnswerMessage> {
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
        const items: IOrders = {
          name: body.name,
          phone: body.phone,
          address: body.address,
          totalAmount,
          userId: result[x][0].userId,
          order: result[x],
        }
        await new this.orders(items).save()
      }
      return { message: "Thank you wait for delivery" }
    } catch (e) {
      console.log(e)
    }
  }

  async history(phone: string): Promise<OrdersDto[]> {
    try {
      const buyProHistory = await this.orders.find({ phone })
      return buyProHistory
    } catch (e) {
      console.log(e)
    }
  }
}
