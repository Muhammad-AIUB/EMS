import { Injectable } from '@nestjs/common';
import { UploadEvaluationDto } from './dto/upload-evaluation.dto';

@Injectable()
export class EvaluationFeedbackService {
  async uploadEvaluation(uploadEvaluationDto: UploadEvaluationDto) {
    const { courseId, title, description, type, questions, maximumPoints, evaluationFile } = uploadEvaluationDto;

    // You can add logic to save the file and other data to a database or file system
    const filePath = `uploads/${evaluationFile.filename}`;

    return {
      message: 'Evaluation uploaded successfully',
      evaluation: {
        courseId,
        title,
        description,
        type,
        questions,
        maximumPoints,
        evaluationFile: {
          originalname: evaluationFile.originalname,
          filename: evaluationFile.filename,
          path: filePath,
        },
      },
    };
  }
}
