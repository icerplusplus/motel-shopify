import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Roles } from '../utils/variables';
import { BaseDto } from './base.dto';

export class UserDto extends BaseDto {
  @ApiProperty()
  @IsEmail()
  Email: string;

  @ApiProperty()
  Password: string;

  @ApiProperty()
  Name: string;

  @ApiProperty()
  Phone: string;

  @ApiProperty()
  Address: string;

  @ApiProperty()
  Avatar: string;

  @ApiProperty()
  Role: Roles;
}
