import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CertificationsService } from './certifications.service';
import { CreateCertificationDto } from './dto/create-certification.dto';

@Controller('certifications')
export class CertificationsController {
  constructor(private readonly certificationsService: CertificationsService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('certificateFile'))
  async createCertification(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCertificationDto: CreateCertificationDto,
  ) {
    return this.certificationsService.createCertification({
      ...createCertificationDto,
      certificateFile: file,
    });
  }

  // New GET endpoint to fetch all certifications
  @Get()
  async getAllCertifications() {
    return this.certificationsService.getAllCertifications();
  }
}
