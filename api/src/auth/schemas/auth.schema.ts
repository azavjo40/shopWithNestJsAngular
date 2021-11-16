import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
export type AuthDocument = Auth & Document

@Schema()
export class Auth {
  @Prop()
  email: string

  @Prop()
  password: string

  @Prop()
  name: string

  @Prop()
  lastName: string

  @Prop()
  age: string

  @Prop()
  administration: boolean
}

export const AuthSchema = SchemaFactory.createForClass(Auth)
