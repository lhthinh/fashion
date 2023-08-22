import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { OrderService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto)
  }

  @ApiOperation({ summary: 'Lấy đơn hàng' })
  @Get()
  findAll() {
    return this.orderService.findAll()
  }

  @ApiOperation({ summary: 'Lấy đơn hàng theo userId' })
  @Get(':userId')
  findOne(@Param('userId', ParseIntPipe) id: number) {
    return this.orderService.findOneByUserId(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto)
  }
}
