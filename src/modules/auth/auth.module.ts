import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { LocalStrategy } from './strategies/local.strategy'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller'
import { JWT_ACCESS_TOKEN_EXPIRES_IN, JWT_ACCESS_TOKEN_SECRET_KEY } from './auth.constant'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_ACCESS_TOKEN_SECRET_KEY,
      signOptions: { expiresIn: JWT_ACCESS_TOKEN_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
