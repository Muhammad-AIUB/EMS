// evaluation-feedback/evaluation-feedback.service.ts

import { Injectable } from '@nestjs/common';
import { UploadEvaluationDto } from './dto/upload-evaluation.dto';

@Injectable()
export class EvaluationFeedbackService {
  async uploadEvaluation(uploadEvaluationDto: UploadEvaluationDto) {
    const {
      courseId,
      evaluationType,
      title,
      description,
      deadline,
      maximumPoints,
      evaluationFile,
    } = uploadEvaluationDto;

    // Implement your file saving logic here
    const filePath = `path/to/save/${evaluationFile.originalname}`;

    // Here you can save file details to the database or perform other operations related to evaluation creation

    return {
      message: 'Evaluation uploaded successfully',
      filePath,
      courseId,
      evaluationType,
      title,
      description,
      deadline,
      maximumPoints,
    };
  }
}
