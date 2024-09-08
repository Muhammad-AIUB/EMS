import { IsString, IsNotEmpty } from 'class-validator';

export class UploadQuizDto {
  @IsString()
  @IsNotEmpty()
  readonly courseId: string;

  @IsString()
  @IsNotEmpty()
  readonly quizTitle: string;

  @IsString()
  readonly quizDescription?: string; // Optional description

  @IsNotEmpty()
  readonly quizFile: Express.Multer.File; // Multer file object
}
