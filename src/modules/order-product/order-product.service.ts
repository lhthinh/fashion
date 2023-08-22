import { Injectable } from '@nestjs/common'
import { CreateOrderProductDto } from './dto/create-order-product.dto'
import { UpdateOrderProductDto } from './dto/update-order-product.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { OrderProduct } from './entities/order-product.entity'
import { Repository } from 'typeorm'

@Injectable()
export class OrderProductService {
  constructor(@InjectRepository(OrderProduct) private readonly orderProductRepository: Repository<OrderProduct>) {}
  create(createOrderProductDto: CreateOrderProductDto) {
    const { ordertId, productId, quantity } = createOrderProductDto
    return this.orderProductRepository.save({
      ordertId,
      productId,
      quantity,
    })
  }

  findAll() {
    return `This action returns all orderProduct`
  }

  findOne(id: number) {
    return `This action returns a #${id} orderProduct`
  }

  update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    return `This action updates a #${id} orderProduct`
  }

  remove(id: number) {
    return `This action removes a #${id} orderProduct`
  }
}
