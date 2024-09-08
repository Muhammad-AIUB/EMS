import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  readonly courseName: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  readonly instructorId: string;

  @IsDateString()
  @IsNotEmpty()
  readonly enrollmentStartDate: string;

  @IsDateString()
  @IsNotEmpty()
  readonly enrollmentEndDate: string;

  @IsString()
  @IsNotEmpty()
  readonly courseStatus: string;
}
