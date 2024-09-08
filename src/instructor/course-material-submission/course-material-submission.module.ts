import { Module } from '@nestjs/common';
import { CourseMaterialService } from './course-material-submission.service';
import { CourseMaterialController } from './course-material-submission.controller';

@Module({
  controllers: [CourseMaterialController],
  providers: [CourseMaterialService],
  exports: [CourseMaterialService],
})
export class CourseMaterialModule {}
