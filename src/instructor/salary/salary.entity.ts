// src/instructor/salary/salary.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Entity('Salaries')
export class SalaryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ type: 'timestamp' })
  dateIssued: Date;

  @ManyToOne(() => UserEntity, (user) => user.salaries)
  employee: UserEntity;
}
