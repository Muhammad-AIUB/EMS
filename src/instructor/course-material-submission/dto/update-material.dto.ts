import { IsString, IsNotEmpty } from 'class-validator';

export class UploadCourseMaterialDto {
  @IsString()
  @IsNotEmpty()
  readonly courseID: string;

  @IsString()
  @IsNotEmpty()
  readonly materialType: string;

  @IsString()
  @IsNotEmpty()
  readonly materialTitle: string;

  @IsString()
  readonly materialContent?: string;

  @IsString()
  @IsNotEmpty()
  readonly visibility: string;
}
