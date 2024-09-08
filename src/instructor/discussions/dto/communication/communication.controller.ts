import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('communication')
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  getAllMessages() {
    return this.communicationService.getAllMessages();
  }

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    return this.communicationService.getMessageById(id);
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.communicationService.createMessage(createMessageDto);
  }

  @Put(':id')
  updateMessage(
    @Param('id') id: string,
    @Body() updateMessageDto: UpdateMessageDto,
  ) {
    return this.communicationService.updateMessage(id, updateMessageDto);
  }

  @Delete(':id')
  deleteMessage(@Param('id') id: string) {
    return this.communicationService.deleteMessage(id);
  }
}
