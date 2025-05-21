import {
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
export class AuthDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
