import { BaseEntity } from 'typeorm';
import { Motel, User } from '../utils/type';

export class CommentDto extends BaseEntity {
  rating: number;
  content: string;
  user: User;
  motel: Motel;
}
