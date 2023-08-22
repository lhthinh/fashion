import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from './entities/product.entity'
import { Repository } from 'typeorm'
import * as _ from 'lodash'
@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}
  async create(createProductDto: CreateProductDto, file: Express.Multer.File) {
    return await this.productRepository.save({
      ...createProductDto,
      image: '/files/product/' + file.filename,
    })
  }

  async findAll() {
    return await this.productRepository.find()
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id })
  }

  async update(id: number, updateProductDto: UpdateProductDto, file: Express.Multer.File) {
    const product = await this.findOne(id)
    if (id) {
      return await this.productRepository.save({
        ...product,
        ...updateProductDto,
        image: '/files/product/' + file.filename,
      })
    }
  }

  async remove(id: number) {
    return this.productRepository.softDelete({ id })
  }
}
