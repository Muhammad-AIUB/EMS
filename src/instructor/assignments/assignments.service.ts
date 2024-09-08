import { Injectable } from '@nestjs/common';
import { UploadAssignmentDto } from './dto/upload-assignment.dto';

@Injectable()
export class AssignmentsService {
  async uploadAssignment(
    file: Express.Multer.File,
    uploadAssignmentDto: UploadAssignmentDto,
  ) {
    const { assignmentID, studentID, fileName } = uploadAssignmentDto;

    console.log(`Assignment ID: ${assignmentID}`);
    console.log(`Student ID: ${studentID}`);
    console.log(`File Name: ${fileName}`);

    const filePath = `path/to/save/${file.originalname}`;


    return {
      message: 'File uploaded successfully',
      filePath,
    };
  }
}
