import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthuserService } from 'src/users/services/authuser.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: AuthuserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
