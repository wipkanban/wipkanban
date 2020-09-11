import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './controllers/board.controller';
import { Board } from './Entities/board.entitie';
import { BoardService } from './services/board.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Board]),
    ],
    providers: [BoardService],
    controllers: [BoardsController],
    exports: []
})
export class BoardsModule { }
