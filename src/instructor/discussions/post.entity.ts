// src/instructor/discussions/post.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity'; // Adjust import path as per your project structure

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;
}
