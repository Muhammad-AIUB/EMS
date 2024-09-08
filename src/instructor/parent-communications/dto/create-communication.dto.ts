import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommunicationDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
