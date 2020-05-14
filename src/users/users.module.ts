import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
import { UserResolver } from './resolvers/user.resolver';
import { AuthuserService } from './services/authuser.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserResolver, UserService, AuthuserService],
  controllers: [UsersController],
  exports: [AuthuserService]
})
export class UsersModule {}
