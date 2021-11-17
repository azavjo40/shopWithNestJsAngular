import { IsString, IsArray } from "class-validator"
export class OrdersDto {
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
