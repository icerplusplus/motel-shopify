import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DATABASE } from '../utils/variables';
import { BaseEntity } from './base.entity';
import { MotelEntity } from './motel.entity';

@Entity({ name: 'motel_details', database: DATABASE.DB_NAME })
export class MotelDetailEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  value: string;

  @ManyToOne(() => MotelEntity, (motel) => motel.ID)
  @JoinColumn({ name: 'motel' })
  motel: MotelEntity;
}
