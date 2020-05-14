import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UsersController } from './users.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'wipkanban',
      entities: [User],
      logging: true,
    }),
    TypeOrmModule.forFeature([User]),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/users/schema/schema.gql',
    }),
  ],
  providers: [UserResolver, UserService],
  controllers: [UsersController],
})
export class UsersModule {}
