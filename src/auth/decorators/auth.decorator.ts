import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';

export const Auth = () => UseGuards(JwtAuthGuard);
