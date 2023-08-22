import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateProductDto {
  @ApiProperty({ example: '' })
  @IsString()
  productName: string

  @ApiProperty({ example: '' })
  @IsOptional()
  @IsString()
  description: string

  @ApiProperty({ example: '' })
  @IsNumber()
  @Type(() => Number)
  price: number

  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File
}
