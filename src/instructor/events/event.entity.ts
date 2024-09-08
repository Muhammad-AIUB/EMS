import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventName: string;

  @Column()
  eventDate: Date;

  @Column()
  description: string;
}
