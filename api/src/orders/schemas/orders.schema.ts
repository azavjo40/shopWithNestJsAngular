import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
export type OrdersDocument = Orders & Document

@Schema()
export class Orders {
  @Prop()
  name: string

  @Prop()
  phone: string

  @Prop()
  address: string

  @Prop()
  totalAmount: string
  @Prop()
  userId: string
  @Prop()
  order: Array<any>
}

export const OrdersSchema = SchemaFactory.createForClass(Orders)
