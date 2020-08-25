import { Controller, Request, Post, UseGuards, Get, Body, Param, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserDto } from '../dto/user.dto';
import { User } from 'src/users/Entities/user.entity';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/register')
  @HttpCode(HttpStatus.CREATED)
  async registerUser(@Body() userDto: UserDto) {

    const result: User | String = await this.authService.registerUser(userDto);

    if (typeof result == "string") {
      throw new HttpException(result, HttpStatus.NOT_ACCEPTABLE);
    }

    return result;

  }
}
