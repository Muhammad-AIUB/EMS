import { Injectable } from '@nestjs/common';
import { UploadCourseMaterialDto } from './dto/upload-course-material.dto';

@Injectable()
export class CourseMaterialService {
  async uploadCourseMaterial(
    file: Express.Multer.File,
    uploadCourseMaterialDto: UploadCourseMaterialDto,
  ) {
    const { courseID, materialType, materialTitle, visibility } =
      uploadCourseMaterialDto;

    // Implement your file saving logic here
    const filePath = `path/to/save/${file.originalname}`;

    // Here you can save file details to the database using the destructured variables
    console.log(`Course ID: ${courseID}`);
    console.log(`Material Type: ${materialType}`);
    console.log(`Material Title: ${materialTitle}`);
    console.log(`Visibility: ${visibility}`);
    console.log(`File Path: ${filePath}`);

    // You would typically save these details to the database here

    return {
      message: 'File uploaded successfully',
      filePath,
      courseID,
      materialType,
      materialTitle,
      visibility,
    };
  }
}
