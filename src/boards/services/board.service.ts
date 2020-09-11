import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from "../Entities/board.entitie"

@Injectable()
export class BoardService {

  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) { }

  findAll() {
    return this.boardRepository.find();
  }
}
