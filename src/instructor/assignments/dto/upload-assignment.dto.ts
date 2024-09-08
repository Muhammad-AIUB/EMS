import { IsString, IsNotEmpty } from 'class-validator';

export class UploadAssignmentDto {
  @IsString()
  @IsNotEmpty()
  readonly assignmentID: string;

  @IsString()
  @IsNotEmpty()
  readonly studentID: string;

  @IsString()
  @IsNotEmpty()
  readonly fileName: string;
}
