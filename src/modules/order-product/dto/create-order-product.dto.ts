import { PartialType } from '@nestjs/mapped-types'
import { OrderProduct } from '../entities/order-product.entity'

export class CreateOrderProductDto extends PartialType(OrderProduct) {}
