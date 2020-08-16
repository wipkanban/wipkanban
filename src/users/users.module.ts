import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { UsersController } from './controllers/users.controller';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserResolver, UserService],
  controllers: [UsersController],
  exports: [UserService]
})
export class UsersModule {}
