import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TeamsModule } from './teams/teams.module';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/Entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';

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
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema/schema.gql',
      context: ({ req }) => ({ req }),
    }),
    UsersModule,
    AuthModule,
    TeamsModule,
    BoardsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
