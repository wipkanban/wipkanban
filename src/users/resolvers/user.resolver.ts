import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from '../Entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql.auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserService } from '../services/user.service';

@Resolver('Users')
export class UserResolver {
  constructor(private userService: UserService) { }

  @UseGuards(GqlAuthGuard)
  @Query(returns => [User])
  public async users(@CurrentUser() user) {
   
    const users: Array<User> = await this.userService.findAll();

    return users;
  }
}
