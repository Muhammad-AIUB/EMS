

import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCertificationDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  readonly recipient: string; 

  @IsOptional()
  readonly certificateFile?: Express.Multer.File; 
}
