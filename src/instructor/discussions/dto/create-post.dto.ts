import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  readonly courseId: string;

  @IsString()
  @IsNotEmpty()
  readonly instructorId: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;
}
