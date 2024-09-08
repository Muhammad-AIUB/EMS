import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseDesignService {
  private courses = [];

  getAllCourses() {
    return this.courses;
  }

  getCourseById(id: string) {
    return this.courses.find((course) => course.id === id);
  }

  createCourse(createCourseDto: CreateCourseDto) {
    const newCourse = {
      id: (this.courses.length + 1).toString(),
      ...createCourseDto,
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  updateCourse(id: string, updateCourseDto: UpdateCourseDto) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index !== -1) {
      this.courses[index] = { ...this.courses[index], ...updateCourseDto };
      return this.courses[index];
    }
    return null;
  }

  deleteCourse(id: string) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index !== -1) {
      const deletedCourse = this.courses.splice(index, 1);
      return deletedCourse[0];
    }
    return null;
  }
}
