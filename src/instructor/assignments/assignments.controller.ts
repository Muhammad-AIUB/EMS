import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AssignmentsService } from './assignments.service';
import { UploadAssignmentDto } from './dto/upload-assignment.dto';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadAssignment(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadAssignmentDto: UploadAssignmentDto,
  ) {
    return this.assignmentsService.uploadAssignment(file, uploadAssignmentDto);
  }
}
