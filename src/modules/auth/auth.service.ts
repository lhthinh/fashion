import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { JWT_ACCESS_TOKEN_EXPIRES_IN } from './auth.constant'

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    // const payload = { username: user.username, sub: user.userId }
    return {
      accessToken: this.jwtService.sign(user),
      expiresIn: JWT_ACCESS_TOKEN_EXPIRES_IN,
    }
  }
}
