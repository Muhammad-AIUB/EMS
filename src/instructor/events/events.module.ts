// events/events.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule if using TypeORM
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventEntity } from './event.entity'; // Import the entity

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])], // Register entity here
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
