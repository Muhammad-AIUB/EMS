import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMaterialDto {
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

  @IsNotEmpty()
  readonly uploadDate: Date;

  @IsString()
  @IsNotEmpty()
  readonly visibility: string;
}
