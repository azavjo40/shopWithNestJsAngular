import { IsString, IsInt } from "class-validator"
export class ProductDto {
  @IsString()
  readonly name: string
  @IsString()
  readonly type: string
  @IsString()
  readonly cost: string
  @IsString()
  readonly paragraph: string
  @IsString()
  readonly userId: string
  readonly image?: string
}
