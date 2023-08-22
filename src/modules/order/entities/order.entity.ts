import { OrderProduct } from 'src/modules/order-product/entities/order-product.entity'
import { User } from 'src/modules/user/entities/user.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, VirtualColumn } from 'typeorm'

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'user_id' })
  userId: number

  @ManyToOne(() => User, user => user.orders)
  user: User

  @OneToMany(() => OrderProduct, order => order.order)
  orderProduct: OrderProduct[]

  @VirtualColumn({
    query: alias =>
      `SELECT (sum(pro.price * op.quantity))
      FROM public.order o
      join order_product op on o.id = op.order_id
      left join product pro on op.product_id = pro.id 
      where o.id = ${alias}.id
      group by o.id
      limit 1`,
  })
  totalPrice: number
}
