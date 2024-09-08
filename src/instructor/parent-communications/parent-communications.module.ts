import { Module } from '@nestjs/common';
import { ParentCommunicationsService } from './parent-communications.service';
import { ParentCommunicationsController } from './parent-communications.controller';

@Module({
  providers: [ParentCommunicationsService],
  controllers: [ParentCommunicationsController],
})
export class ParentCommunicationsModule {}
