import { Module } from '@nestjs/common';
import { EvaluationFeedbackController } from './evaluation-feedback.controller';
import { EvaluationFeedbackService } from './evaluation-feedback.service';

@Module({
  controllers: [EvaluationFeedbackController],
  providers: [EvaluationFeedbackService],
})
export class EvaluationFeedbackModule {}
