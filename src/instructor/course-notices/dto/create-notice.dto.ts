import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNoticeDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @IsString()
  @IsNotEmpty()
  readonly details: string;
}
