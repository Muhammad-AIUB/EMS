// src/instructor/course-notices/notice.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Entity('Notices')
export class NoticeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: 'timestamp' })
  postedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.notices)
  user: UserEntity;
}
