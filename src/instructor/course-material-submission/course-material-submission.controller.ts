import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CourseMaterialService } from './course-material-submission.service';
import { UploadCourseMaterialDto } from './dto/upload-course-material.dto';

@Controller('course-material')
export class CourseMaterialController {
  constructor(private readonly courseMaterialService: CourseMaterialService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCourseMaterial(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadCourseMaterialDto: UploadCourseMaterialDto,
  ) {
    return this.courseMaterialService.uploadCourseMaterial(file, uploadCourseMaterialDto);
  }
}
