import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEvaluationDto {
  @IsString()
  @IsNotEmpty()
  readonly courseId: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string; // 'Quiz' or 'Assignment'

  @IsString()
  @IsNotEmpty()
  readonly questions: string;

  @IsString()
  @IsNotEmpty()
  readonly maximumPoints: string;
}
