import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}


  @Get('/mongo')
  public posts() {
    return this.userService.findAll();
  }
}
