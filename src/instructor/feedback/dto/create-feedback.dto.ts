import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @IsString()
  @IsOptional()
  readonly type?: string; // e.g., bug report, feature request, general feedback
}
