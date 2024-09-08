import { Injectable } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { CertificationEntity } from './certification.entity';

@Injectable()
export class CertificationsService {
  private certifications: CertificationEntity[] = []; // In-memory array to store certifications

  async createCertification(createCertificationDto: CreateCertificationDto) {
    const { title, description, recipient, certificateFile } = createCertificationDto;

    let filePath;
    if (certificateFile) {
      filePath = `path/to/save/${certificateFile.originalname}`;
    }

    // Create a new certification object
    const newCertification = {
      id: this.certifications.length + 1, // Generate a simple ID
      title,
      issuedBy: 'Instructor', // Example value, replace with the actual issuer
      issuedAt: new Date(),
      user: null, // Replace with the actual user object if necessary
    };

    // Add the new certification to the in-memory array
    this.certifications.push(newCertification);

    return {
      message: 'Certification created successfully',
      title,
      description,
      recipient,
      certificateFilePath: filePath,
    };
  }

  // New method to fetch all certifications
  async getAllCertifications(): Promise<CertificationEntity[]> {
    return this.certifications; // Return all certifications from the in-memory array
  }
}
