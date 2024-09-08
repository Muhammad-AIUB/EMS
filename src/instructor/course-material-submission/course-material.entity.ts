import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CourseEntity } from '../course-design/course.entity'; // Adjust import path as per your project structure

@Entity()
export class MaterialEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CourseEntity, (course) => course.materials)
  course: CourseEntity;

  @Column()
  materialTitle: string;

  @Column()
  materialContent: string;

  @Column()
  uploadDate: Date;
}
