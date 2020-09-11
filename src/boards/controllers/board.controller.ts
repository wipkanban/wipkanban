import { Controller, Request, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { BoardService } from '../services/board.service';

@Controller("/boards")
export class BoardsController {
  constructor(private boardService: BoardService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@Request() req) {
    return this.boardService.findAll();
  }
}
