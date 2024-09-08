import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MaterialEntity } from '../course-material-submission/course-material.entity'; // Adjust import path as per your project structure

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;

  @Column()
  description: string;

  @OneToMany(() => MaterialEntity, (material) => material.course)
  materials: MaterialEntity[];
}
