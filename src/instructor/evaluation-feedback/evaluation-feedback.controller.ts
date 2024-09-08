// evaluation-feedback/evaluation-feedback.controller.ts

import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EvaluationFeedbackService } from './evaluation-feedback.service';
import { UploadEvaluationDto } from './dto/upload-evaluation.dto';

@Controller('evaluation-feedback')
export class EvaluationFeedbackController {
  constructor(private readonly evalService: EvaluationFeedbackService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('evaluationFile'))
  async uploadEvaluation(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadEvaluationDto: UploadEvaluationDto,
  ) {
    return this.evalService.uploadEvaluation({
      ...uploadEvaluationDto,
      evaluationFile: file,
    });
  }
}
