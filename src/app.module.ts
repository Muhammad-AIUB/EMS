import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProfileManagementModule } from './instructor/profile-management/profile-management.module';
import { CourseDesignModule } from './instructor/course-design/course-design.module';
import { CourseMaterialModule } from './instructor/course-material-submission/course-material-submission.module';
import { AssignmentsModule } from './instructor/assignments/assignments.module';
import { QuizzesModule } from './instructor/quizzes/quizzes.module';
import { EvaluationFeedbackModule } from './instructor/evaluation-feedback/evaluation-feedback.module';
import { EventsModule } from './instructor/events/events.module';
import { DiscussionsModule } from './instructor/discussions/discussions.module';
import { ParentCommunicationsModule } from './instructor/parent-communications/parent-communications.module';
import { CourseNoticesModule } from './instructor/course-notices/course-notices.module';
import { CertificationsModule } from './instructor/certifications/certifications.module';
import { SalaryModule } from './instructor/salary/salary.module';
import { FeedbackModule } from './instructor/feedback/feedback.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'Instructor',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Corrected: Only entities should be listed here
      synchronize: true, // Ensure this is false in production
    }),
    ProfileManagementModule,
    CourseDesignModule,
    CourseMaterialModule,
    AssignmentsModule,
    QuizzesModule,
    EvaluationFeedbackModule,
    EventsModule,
    DiscussionsModule,
    ParentCommunicationsModule,
    CourseNoticesModule,
    CertificationsModule,
    SalaryModule,
    FeedbackModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
