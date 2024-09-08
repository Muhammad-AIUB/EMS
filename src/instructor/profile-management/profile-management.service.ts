import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileManagementService {
  private profiles = [];

  getAllProfiles() {
    return this.profiles;
  }

  getProfileById(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  createProfile(createProfileDto: CreateProfileDto) {
    const newProfile = {
      id: (this.profiles.length + 1).toString(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  updateProfile(id: string, updateProfileDto: UpdateProfileDto) {
    const index = this.profiles.findIndex((profile) => profile.id === id);
    if (index !== -1) {
      this.profiles[index] = { ...this.profiles[index], ...updateProfileDto };
      return this.profiles[index];
    }
    return null;
  }

  deleteProfile(id: string) {
    const index = this.profiles.findIndex((profile) => profile.id === id);
    if (index !== -1) {
      const deletedProfile = this.profiles.splice(index, 1);
      return deletedProfile[0];
    }
    return null;
  }
}
