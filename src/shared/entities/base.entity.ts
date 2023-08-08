import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt: Date;

  // @ManyToOne(() => UserEntity, (user) => user.ID, { nullable: true })
  // UserCreate: UserEntity;
}
