
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Entity('Certifications')
export class CertificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  issuedBy: string;

  @Column({ type: 'timestamp' })
  issuedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.certifications)
  user: UserEntity;
}
