// events/dto/create-event.dto.ts

import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  readonly location: string;

  @IsDateString()
  @IsNotEmpty()
  readonly startDate: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly endDate: Date;
}
