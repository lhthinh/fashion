import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsNumber } from 'class-validator'

interface ListProduct {
  productId: number
  quantity: number
}
export class CreateOrderDto {
  @ApiProperty({ example: [{ productId: 1, quantity: 2 }] })
  @IsArray()
  @Type(() => Array)
  listProduct: ListProduct[]

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Type(() => Number)
  userId: number
}
