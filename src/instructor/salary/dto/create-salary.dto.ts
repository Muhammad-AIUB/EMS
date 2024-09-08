import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSalaryDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly amount: string;

  @IsString()
  @IsNotEmpty()
  readonly details: string;
}
