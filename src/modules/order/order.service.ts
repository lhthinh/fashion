import { Injectable } from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Order } from './entities/order.entity'
import { Repository } from 'typeorm'
import { OrderProductService } from '../order-product/order-product.service'

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    private readonly orderProductService: OrderProductService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const { listProduct, userId } = createOrderDto

    const order = await this.orderRepository.save({
      userId,
    })
    if (order) {
      for await (const product of listProduct) {
        await this.orderProductService.create({
          productId: product.productId,
          quantity: product.quantity,
          ordertId: order.id,
        })
      }
    }
  }

  findAll() {
    return this.orderRepository.find({ relations: { orderProduct: { product: true } } })
  }

  findOneByUserId(userId: number) {
    return this.orderRepository.find({ where: { userId }, relations: { orderProduct: { product: true } } })
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`
  }

  remove(id: number) {
    return `This action removes a #${id} order`
  }
}
