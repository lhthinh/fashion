import { OrderProduct } from 'src/modules/order-product/entities/order-product.entity'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'name' })
  productName: string

  @Column({ name: 'price' })
  price: number

  @Column({ name: 'image' })
  image: string

  @Column({ name: 'description', nullable: true })
  description: string

  @OneToMany(() => OrderProduct, orderProduct => orderProduct.product)
  orderProduct: OrderProduct[]

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', nullable: true })
  createdAt: Date

  @Column({ name: 'created_by', default: 'SYSTEM', nullable: true })
  createdBy: string

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date

  @Column({ name: 'updated_by', default: 'SYSTEM', nullable: true })
  updatedBy: string

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt: Date

  @Column({ name: 'deleted_by', nullable: true })
  deletedBy: string
}
