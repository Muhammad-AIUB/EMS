import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CourseDesignService } from './course-design.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseDesignController {
  constructor(private readonly courseDesignService: CourseDesignService) {}

  @Get()
  getAllCourses() {
    return this.courseDesignService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseDesignService.getCourseById(id);
  }

  @Post()
  createCourse(@Body() createCourseDto: CreateCourseDto) {
    return this.courseDesignService.createCourse(createCourseDto);
  }

  @Put(':id')
  updateCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseDesignService.updateCourse(id, updateCourseDto);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseDesignService.deleteCourse(id);
  }
}
