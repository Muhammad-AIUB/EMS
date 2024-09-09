import { CreateEvaluationDto } from './create-evaluation.dto';
import { IsNotEmpty } from 'class-validator';

export class UploadEvaluationDto extends CreateEvaluationDto {
  @IsNotEmpty()
  readonly evaluationFile: Express.Multer.File;
}
