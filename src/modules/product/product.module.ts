import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './entities/product.entity'
import { IngredientProductModule } from '../ingredient-product/ingredient-product.module'

@Module({
  imports: [TypeOrmModule.forFeature([Product]), IngredientProductModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
