import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TeamsModule } from './teams/teams.module';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/Entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { Board } from './boards/Entities/board.entitie';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DRIVER_DB as any,
      host: process.env.HOST_DB,
      port: process.env.PORT_DB as any,
      database: process.env.DATABASE,
      entities: [User, Board],
      logging: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema/schema.gql',
      context: ({ req }) => ({ req }),
    }),
    UsersModule,
    AuthModule,
    TeamsModule,
    BoardsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
