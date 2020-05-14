import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../Entities/user.entity';

@Resolver('Users')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => [User])
  public async users() {
    const users: Array<User> = await this.userService.findAll();

    return users;
  }
}
