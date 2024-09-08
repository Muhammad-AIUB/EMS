import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommunicationDto } from './dto/create-communication.dto';
import { UpdateCommunicationDto } from './dto/update-communication.dto';

@Injectable()
export class ParentCommunicationsService {
  private communications = [];

  create(createCommunicationDto: CreateCommunicationDto) {
    const newCommunication = {
      id: this.communications.length + 1,
      ...createCommunicationDto,
    };
    this.communications.push(newCommunication);
    return newCommunication;
  }

  findAll() {
    return this.communications;
  }

  findOne(id: number) {
    const communication = this.communications.find((comm) => comm.id === id);
    if (!communication) {
      throw new NotFoundException(`Communication with ID ${id} not found`);
    }
    return communication;
  }

  update(id: number, updateCommunicationDto: UpdateCommunicationDto) {
    const communicationIndex = this.communications.findIndex(
      (comm) => comm.id === id,
    );
    if (communicationIndex === -1) {
      throw new NotFoundException(`Communication with ID ${id} not found`);
    }
    const updatedCommunication = {
      ...this.communications[communicationIndex],
      ...updateCommunicationDto,
    };
    this.communications[communicationIndex] = updatedCommunication;
    return updatedCommunication;
  }

  remove(id: number) {
    const communicationIndex = this.communications.findIndex(
      (comm) => comm.id === id,
    );
    if (communicationIndex === -1) {
      throw new NotFoundException(`Communication with ID ${id} not found`);
    }
    const deletedCommunication = this.communications.splice(
      communicationIndex,
      1,
    );
    return deletedCommunication;
  }
}
