import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './resolvers/user.resolver';

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
