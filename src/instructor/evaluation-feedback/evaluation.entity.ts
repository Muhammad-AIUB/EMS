// src/instructor/evaluation-feedback/evaluation.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Entity('Evaluations')
export class EvaluationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column({ type: 'timestamp' })
  evaluatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.evaluations)
  user: UserEntity;
}
