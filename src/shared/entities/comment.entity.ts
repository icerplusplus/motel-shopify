import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DATABASE } from '../utils/variables';
import { BaseEntity } from './base.entity';
import { MotelEntity } from './motel.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'comments', database: DATABASE.DB_NAME })
export class CommentEntity extends BaseEntity {
  @Column({ type: 'float' })
  rating: number;

  @Column({
    type: 'text',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
    default: '',
  })
  content: string;

  @ManyToOne(() => MotelEntity, (motel) => motel.ID)
  @JoinColumn({ name: 'motel' })
  motel: MotelEntity;

  @ManyToOne(() => UserEntity, (user) => user.ID)
  @JoinColumn({ name: 'user' })
  user: UserEntity;
}
