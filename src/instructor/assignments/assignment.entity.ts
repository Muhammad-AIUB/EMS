
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity'; 

@Entity('Assignments')
export class AssignmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  deadline: Date;

  @Column()
  filePath: string;

  @ManyToOne(() => UserEntity, (user) => user.assignments)
  student: UserEntity;
}
