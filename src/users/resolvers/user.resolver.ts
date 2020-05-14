import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../Entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql.auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';


@Resolver('Users')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => [User])
  @UseGuards(GqlAuthGuard)
  public async users(@CurrentUser() user: any = null) {
    const users: Array<User> = await this.userService.findAll();
    console.error(user);
    return users;
  }
}
