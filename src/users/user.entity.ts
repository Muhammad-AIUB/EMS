// src/users/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AssignmentEntity } from '../instructor/assignments/assignment.entity';
import { SalaryEntity } from '../instructor/salary/salary.entity';
import { QuizEntity } from '../instructor/quizzes/quiz.entity';
import { CommunicationEntity } from '../instructor/parent-communications/communication.entity';
import { FeedbackEntity } from '../instructor/feedback/feedback.entity';
import { EvaluationEntity } from '../instructor/evaluation-feedback/evaluation.entity';
import { NoticeEntity } from '../instructor/course-notices/notice.entity';
import { CertificationEntity } from '../instructor/certifications/certification.entity';
import { PostEntity } from '../instructor/discussions/post.entity';

@Entity('Users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.student)
  assignments: AssignmentEntity[];

  @OneToMany(() => SalaryEntity, (salary) => salary.employee)
  salaries: SalaryEntity[];

  @OneToMany(() => QuizEntity, (quiz) => quiz.creator)
  quizzes: QuizEntity[];

  @OneToMany(() => CommunicationEntity, (communication) => communication.user)
  communications: CommunicationEntity[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.user)
  feedbacks: FeedbackEntity[];

  @OneToMany(() => EvaluationEntity, (evaluation) => evaluation.user)
  evaluations: EvaluationEntity[];

  @OneToMany(() => NoticeEntity, (notice) => notice.user)
  notices: NoticeEntity[];

  @OneToMany(() => CertificationEntity, (certification) => certification.user)
  certifications: CertificationEntity[];
}
