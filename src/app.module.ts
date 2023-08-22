import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'
import { TypeOrmModule } from '@nestjs/typeorm'
import { I18nModule } from 'nestjs-i18n'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configConfig } from './common/config/config.config'
import { i18nConfig } from './common/config/i18n.config'
import { typeOrmAsyncConfig } from './common/config/typeorm.config'
import { AuthModule } from './modules/auth/auth.module'
import { OrderProductModule } from './modules/order-product/order-product.module'
import { OrderModule } from './modules/order/order.module'
import { ProductModule } from './modules/product/product.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot(configConfig),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    I18nModule.forRoot(i18nConfig),
    MulterModule.register({
      dest: './files',
    }),
    AuthModule,
    UserModule,
    ProductModule,
    OrderModule,
    OrderProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
