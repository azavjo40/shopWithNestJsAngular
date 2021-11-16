import { IsString, IsArray } from "class-validator"
export class BuyProductDto {
  @IsString()
  name: string
  @IsString()
  phone: string
  @IsString()
  address: string
  @IsString()
  totalAmount: string
  @IsArray()
  order: Array<any>
}
