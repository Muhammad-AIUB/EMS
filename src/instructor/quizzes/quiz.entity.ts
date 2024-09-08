// src/instructor/quizzes/quiz.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Entity('Quizzes')
export class QuizEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.quizzes)
  creator: UserEntity;
}
