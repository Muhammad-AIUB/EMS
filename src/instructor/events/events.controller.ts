// events/events.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('create')
  async createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }
}
