import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
export type ProductDocument = Product & Document

@Schema()
export class Product {
  @Prop()
  name: string

  @Prop()
  type: string

  @Prop()
  cost: string

  @Prop()
  paragraph: string

  @Prop()
  userId: string

  @Prop()
  image: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)
