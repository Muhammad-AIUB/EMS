import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class CommunicationService {
  private messages = [];

  getAllMessages() {
    return this.messages;
  }

  getMessageById(id: string) {
    return this.messages.find((message) => message.id === id);
  }

  createMessage(createMessageDto: CreateMessageDto) {
    const newMessage = {
      id: (this.messages.length + 1).toString(),
      ...createMessageDto,
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  updateMessage(id: string, updateMessageDto: UpdateMessageDto) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index !== -1) {
      this.messages[index] = { ...this.messages[index], ...updateMessageDto };
      return this.messages[index];
    }
    return null;
  }

  deleteMessage(id: string) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index !== -1) {
      const deletedMessage = this.messages.splice(index, 1);
      return deletedMessage[0];
    }
    return null;
  }
}
