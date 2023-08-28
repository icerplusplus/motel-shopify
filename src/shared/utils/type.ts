import { Roles } from './variables';

export interface Pagination {
  page: number;
  size: number;
}
export interface File {
  originalname: string;
  filename: string;
  path: string;
  size: number;
}

export interface BaseType {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date;
}

export interface Motel extends BaseType {
  title: string;
  description: string;
  thumbnails: string[];
  area: number;
  unitArea: string; // custom area enum
  price: number;
  unitPrice: string; // custom price unit enum
  paymentMethod: string; // custom payment method Enum
  address: string;
  longtitude: string;
  latitude: string;
  alias: string[];
  rating: number;
  isChecked: boolean;
  detail: MotelDetail;
  comments: Comment;
  owner: User;
}

export interface MotelDetail extends BaseType {
  title: string;
  value: string;
  motel: Motel;
}

export interface Comment extends BaseType {
  rating: number;
  content: string;
  user: User;
  motel: Motel;
}

export interface User extends BaseType {
  Email: string;
  Password: string;
  Name: string;
  Phone: string;
  Address: string;
  Avatar: string;
  Role: Roles;
}
