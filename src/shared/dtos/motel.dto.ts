import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseDto } from './base.dto';
import {
  IsNotEmpty,
  IsStrongPassword,
  MinLength,
  IsEmail,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { PaymentMethod, TypeArea, TypePrice } from '../utils/variables';
import { CommentEntity, MotelDetailEntity, UserEntity } from '../entities';

export class MotelDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  thumbnails: string[];

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  area: number;

  @ApiProperty()
  @IsEnum(TypeArea)
  @IsNotEmpty()
  @Expose()
  unitArea: TypeArea;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  price: number;

  @ApiProperty()
  @IsEnum(TypePrice)
  @IsNotEmpty()
  @Expose()
  unitPrice: TypePrice;

  @ApiProperty()
  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  @Expose()
  paymentMethod: PaymentMethod;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  address: string;

  @ApiProperty()
  @Expose()
  longtitude: number;

  @ApiProperty()
  @Expose()
  latitude: number;

  @ApiProperty()
  @Expose()
  alias: string[];

  @ApiProperty()
  @Expose()
  rating: number;

  @ApiProperty()
  @Expose()
  isChecked: boolean;

  @ApiProperty()
  @Expose()
  details: MotelDetailEntity[];

  @ApiProperty()
  @Expose()
  comments: CommentEntity[];

  @ApiProperty()
  @Expose()
  owner: UserEntity;
}

export class CreateMotelDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  description: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  thumbnails: string[];

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  area: number;

  @ApiProperty()
  @IsEnum(TypeArea)
  @IsNotEmpty()
  @Expose()
  unitArea: TypeArea;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  price: number;

  @ApiProperty()
  @IsEnum(TypePrice)
  @IsNotEmpty()
  @Expose()
  unitPrice: TypePrice;

  @ApiProperty()
  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  @Expose()
  paymentMethod: PaymentMethod;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  address: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  longtitude: number;

  @ApiProperty()
  @IsOptional()
  @Expose()
  latitude: number;

  @ApiProperty()
  @IsOptional()
  @Expose()
  alias: string[];
}

export class UpdateMotelDto {
  @ApiProperty()
  @IsOptional()
  @Expose()
  title: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  description: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  thumbnails: string[];

  @ApiProperty()
  @IsOptional()
  @Expose()
  area: number;

  @ApiProperty()
  @IsEnum(TypeArea)
  @IsOptional()
  @Expose()
  unitArea: TypeArea;

  @ApiProperty()
  @IsOptional()
  @Expose()
  price: number;

  @ApiProperty()
  @IsEnum(TypePrice)
  @IsOptional()
  @Expose()
  unitPrice: TypePrice;

  @ApiProperty()
  @IsEnum(PaymentMethod)
  @IsOptional()
  @Expose()
  paymentMethod: PaymentMethod;

  @ApiProperty()
  @IsOptional()
  @Expose()
  address: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  longtitude: number;

  @ApiProperty()
  @IsOptional()
  @Expose()
  latitude: number;

  @ApiProperty()
  @IsOptional()
  @Expose()
  alias: string[];
}
