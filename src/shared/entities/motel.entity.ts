import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import {
  DATABASE,
  PaymentMethod,
  TypeArea,
  TypePrice,
} from '../utils/variables';
import { MotelDetailEntity } from './motel.detail.entity';
import { BaseEntity } from './base.entity';
import { CommentEntity } from './comment.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'motels', database: DATABASE.DB_NAME })
export class MotelEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    length: 255,
  })
  title: string;

  @Column({
    type: 'text',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  description: string;

  @Column({
    type: 'simple-array',
    nullable: true,
    // default: [],
  })
  thumnails: string[];

  @Column()
  area: number;

  @Column({
    type: 'enum',
    enum: TypeArea,
    nullable: true,
    default: TypeArea.M2,
  })
  unitArea: TypeArea;

  @Column()
  price: number;

  @Column({
    type: 'enum',
    enum: TypePrice,
    nullable: true,
    default: TypePrice.VND,
  })
  unitPrice: TypePrice;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    nullable: true,
    default: PaymentMethod.MONTH,
  })
  paymentMethod: PaymentMethod;

  @Column({
    type: 'varchar',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    length: 255,
  })
  address: string;

  @Column({
    nullable: true,
  })
  longtitude: number;

  @Column({
    nullable: true,
  })
  latitude: number;

  @Column({
    type: 'simple-array',
    nullable: true,
  })
  alias: string[];

  @Column({ type: 'float', nullable: true, default: 0 })
  rating: number;

  @Column({
    type: 'boolean',
    nullable: true,
    default: false,
  })
  isChecked: boolean;

  @OneToMany(() => MotelDetailEntity, (detail) => detail.motel, {
    nullable: true,
  })
  details: MotelDetailEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.motel)
  comments: CommentEntity[];

  @ManyToOne(() => UserEntity, (owner) => owner.ID)
  @JoinColumn({ name: 'owner' })
  owner: UserEntity;
}
