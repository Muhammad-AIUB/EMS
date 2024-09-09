// events/event.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('events')  // The name of the table in the database
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  location: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
