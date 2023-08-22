import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger'
import { productUpload } from 'src/common/config/multer.config'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductService } from './product.service'

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Thêm product' })
  @UseInterceptors(FileInterceptor('file', productUpload))
  @ApiConsumes('multipart/form-data')
  create(@Body() createProductDto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
    return this.productService.create(createProductDto, file)
  }

  @ApiOperation({ summary: 'Lấy danh sách tất cả product' })
  @Get()
  findAll() {
    return this.productService.findAll()
  }

  @ApiOperation({ summary: 'Lấy chi tiết product' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Sửa product' })
  @UseInterceptors(FileInterceptor('file', productUpload))
  @ApiConsumes('multipart/form-data')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.productService.update(id, updateProductDto, file)
  }

  @ApiOperation({ summary: 'Xóa product' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id)
  }
}
