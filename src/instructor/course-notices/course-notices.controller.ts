import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CourseNoticesService } from './course-notices.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Controller('course-notices')
export class CourseNoticesController {
  constructor(private readonly courseNoticesService: CourseNoticesService) {}

  @Get()
  getAllNotices() {
    return this.courseNoticesService.getAllNotices();
  }

  @Get(':id')
  getNoticeById(@Param('id') id: string) {
    return this.courseNoticesService.getNoticeById(id);
  }

  @Post()
  createNotice(@Body() createNoticeDto: CreateNoticeDto) {
    return this.courseNoticesService.createNotice(createNoticeDto);
  }

  @Put(':id')
  updateNotice(
    @Param('id') id: string,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ) {
    return this.courseNoticesService.updateNotice(id, updateNoticeDto);
  }

  @Delete(':id')
  deleteNotice(@Param('id') id: string) {
    return this.courseNoticesService.deleteNotice(id);
  }
}
