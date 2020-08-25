import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../Entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql.auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { OauthTOken } from '../Entities/oauth-token.type';


@Resolver('Users')
export class UserResolver {
  constructor(private userService: UserService) { }

  @UseGuards(GqlAuthGuard)
  @Query(returns => [User])
  public async users(@CurrentUser() user) {
    console.log(user);
    const users: Array<User> = await this.userService.findAll();

    return users;
  }


  @Mutation(returns => OauthTOken)
  public async login(
    @Args({ name: 'username' }) username: string,
    @Args({ name: 'password' }) password: string
  ) {

    const user: any = await this.userService.findUserByAndPassword(username, password);

    console.log(user);

    const oauthTOken: OauthTOken = new OauthTOken();
    oauthTOken.accessToken = "aushaushauaushausha";

    return oauthTOken;

  }
}
