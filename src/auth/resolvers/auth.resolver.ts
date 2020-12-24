import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { OauthTOken } from '../../users/Entities/oauth-token.type';
import { AuthService } from '../services/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation(returns => OauthTOken)
  public async login(
    @Args({ name: 'username' }) username: string,
    @Args({ name: 'password' }) password: string
  ) {

    const user: any = {username, password}

    const authResult = await this.authService.login(user);

    const oauth = new OauthTOken();
    oauth.accessToken = authResult.access_token;

    return oauth;
  }
}
