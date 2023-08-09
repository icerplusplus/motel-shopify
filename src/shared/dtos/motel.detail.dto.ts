import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from './base.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { MotelEntity } from '../entities';

export class MotelDetailDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  value: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  motel: MotelEntity;
}

export class CreateMotelDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  value: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  motel: string; // motel id
}

export class CreateMotelDetailParams {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  value: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  motel: MotelEntity; // motel id
}

export class UpdateMotelDetailDto {
  @ApiProperty()
  @IsOptional()
  @Expose()
  ID: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  title: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  value: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  motel: string; // motel id
}

export class UpdateMotelDetailParams {
  @ApiProperty()
  @IsOptional()
  @Expose()
  title: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  value: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  motel: MotelEntity; // motel id
}
