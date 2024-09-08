// src/instructor/parent-communications/communication.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Entity('Communications')
export class CommunicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column({ type: 'timestamp' })
  sentAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.communications)
  user: UserEntity;
}
