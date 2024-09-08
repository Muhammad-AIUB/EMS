import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsOptional()
  readonly phone?: string;

  @IsString()
  @IsOptional()
  readonly address?: string;
}
