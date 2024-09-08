// src/instructor/feedback/feedback.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Entity('Feedbacks')
export class FeedbackEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.feedbacks)
  user: UserEntity;
}
