import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserResolver, UserService],
  controllers: [UsersController],
})
export class UsersModule {}
