import { Module } from '@nestjs/common';
import { CourseNoticesService } from './course-notices.service';
import { CourseNoticesController } from './course-notices.controller';

@Module({
  providers: [CourseNoticesService],
  controllers: [CourseNoticesController],
})
export class CourseNoticesModule {}
