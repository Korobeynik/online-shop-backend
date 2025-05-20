/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common/';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
//import { Strategy } from 'passport-google-oauth20';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey:
        configService.get<string>('JWT_SECRET') ?? 'default-secret-key',
    });
  }
  async validate({ id }: { id: string }) {
    return this.userService.getById(id);
  }
}
