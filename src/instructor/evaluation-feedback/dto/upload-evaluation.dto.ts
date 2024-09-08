// evaluation-feedback/dto/upload-evaluation.dto.ts

import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class UploadEvaluationDto {
  @IsString()
  @IsNotEmpty()
  readonly courseId: string;

  @IsString()
  @IsNotEmpty()
  readonly evaluationType: string; // Could be 'quiz' or 'assignment'

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description?: string; // Optional description

  @IsDateString()
  @IsNotEmpty()
  readonly deadline: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly maximumPoints: number;

  @IsNotEmpty()
  readonly evaluationFile: Express.Multer.File; // Multer file object
}
