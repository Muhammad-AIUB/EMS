import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Injectable()
export class CourseNoticesService {
  private notices = [];

  getAllNotices() {
    return this.notices;
  }

  getNoticeById(id: string) {
    return this.notices.find((notice) => notice.id === id);
  }

  createNotice(createNoticeDto: CreateNoticeDto) {
    const newNotice = {
      id: (this.notices.length + 1).toString(),
      ...createNoticeDto,
    };
    this.notices.push(newNotice);
    return newNotice;
  }

  updateNotice(id: string, updateNoticeDto: UpdateNoticeDto) {
    const index = this.notices.findIndex((notice) => notice.id === id);
    if (index !== -1) {
      this.notices[index] = { ...this.notices[index], ...updateNoticeDto };
      return this.notices[index];
    }
    return null;
  }

  deleteNotice(id: string) {
    const index = this.notices.findIndex((notice) => notice.id === id);
    if (index !== -1) {
      const deletedNotice = this.notices.splice(index, 1);
      return deletedNotice[0];
    }
    return null;
  }
}
