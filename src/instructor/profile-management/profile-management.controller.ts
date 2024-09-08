import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProfileManagementService } from './profile-management.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileManagementController {
  constructor(
    private readonly profileManagementService: ProfileManagementService,
  ) {}

  @Get()
  getAllProfiles() {
    return this.profileManagementService.getAllProfiles();
  }

  @Get(':id')
  getProfileById(@Param('id') id: string) {
    return this.profileManagementService.getProfileById(id);
  }

  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.profileManagementService.createProfile(createProfileDto);
  }

  @Put(':id')
  updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileManagementService.updateProfile(id, updateProfileDto);
  }

  @Delete(':id')
  deleteProfile(@Param('id') id: string) {
    return this.profileManagementService.deleteProfile(id);
  }
}
