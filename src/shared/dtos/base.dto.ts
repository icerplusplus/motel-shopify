import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';

export class BaseDto {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

//   static plainToClass<Type>(this: new (...args: any[]) => Type, obj: Type) {
//     return plainToClass(this, obj, { excludeExtraneousValues: true });
//   }
}