import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
export type BuyProductDocument = BuyProduct & Document

@Schema()
export class BuyProduct {
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

export const BuyProductSchema = SchemaFactory.createForClass(BuyProduct)
