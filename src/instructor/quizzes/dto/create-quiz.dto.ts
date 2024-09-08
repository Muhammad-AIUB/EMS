import { IsString, IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
