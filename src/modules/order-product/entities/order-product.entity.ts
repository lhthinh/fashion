import { Order } from 'src/modules/order/entities/order.entity'
import { Product } from 'src/modules/product/entities/product.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('order_product')
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'order_id' })
  ordertId: number

  @Column({ name: 'product_id' })
  productId: number

  @Column({ name: 'quantity' })
  quantity: number

  @ManyToOne(() => Product, product => product.orderProduct)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product

  @ManyToOne(() => Order, order => order.orderProduct)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: Order
}
