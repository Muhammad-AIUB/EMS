import { Module } from '@nestjs/common';
import { CourseDesignService } from './course-design.service';
import { CourseDesignController } from './course-design.controller';

@Module({
  providers: [CourseDesignService],
  controllers: [CourseDesignController],
})
export class CourseDesignModule {}
