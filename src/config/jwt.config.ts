import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtConfig = async (
  configService: ConfigService,
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<JwtModuleOptions> => ({
  secret: configService.get<string>('JWT_SECRET'),
});
