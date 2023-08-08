import * as dotenv from 'dotenv';
dotenv.config();

export const DATABASE = {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: +process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
};

export const SERVER = {
  PORT: +process.env.SERVER_PORT,
}

export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum PaymentMethod {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export enum TypePrice {
  VND = 'vnd',
  USD = 'usd',
}

export enum TypeArea {
  M2 = 'm2',
  M = 'm',
}
