import { Module } from '@nestjs/common';
import { ProfileManagementService } from './profile-management.service';
import { ProfileManagementController } from './profile-management.controller';

@Module({
  providers: [ProfileManagementService],
  controllers: [ProfileManagementController],
})
export class ProfileManagementModule {}
