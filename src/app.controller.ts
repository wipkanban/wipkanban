import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/services/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor() { }
}
