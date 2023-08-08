import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DATABASE, Roles } from '../utils/variables';

@Entity({ name: 'users', database: DATABASE.DB_NAME })
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  Email: string;

  @Column({ type: 'varchar', length: 100 })
  Password: string;

  @Column({
    type: 'varchar',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    length: 255,
  })
  Name: string;

  @Column({ unique: true, type: 'varchar', length: 13 })
  Phone: string;

  @Column({
    type: 'varchar',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    length: 255,
  })
  Address: string;

  @Column({
    type: 'varchar',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    length: 255,
    nullable: true,
  })
  Avatar: string;

  @Column({ type: 'enum', enum: Roles, default: Roles.USER })
  Role: Roles;
}
