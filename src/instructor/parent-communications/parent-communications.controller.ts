import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentCommunicationsService } from './parent-communications.service';
import { CreateCommunicationDto } from './dto/create-communication.dto';
import { UpdateCommunicationDto } from './dto/update-communication.dto';

@Controller('parent-communications')
export class ParentCommunicationsController {
  constructor(
    private readonly parentCommunicationsService: ParentCommunicationsService,
  ) {}

  @Post()
  create(@Body() createCommunicationDto: CreateCommunicationDto) {
    return this.parentCommunicationsService.create(createCommunicationDto);
  }

  @Get()
  findAll() {
    return this.parentCommunicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentCommunicationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommunicationDto: UpdateCommunicationDto,
  ) {
    return this.parentCommunicationsService.update(+id, updateCommunicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentCommunicationsService.remove(+id);
  }
}
