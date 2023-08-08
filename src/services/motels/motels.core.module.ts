import { Module } from '@nestjs/common';
import { MotelsCoreService } from './motels.core.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotelEntity } from '@/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([MotelEntity])],
  providers: [MotelsCoreService],
  exports: [MotelsCoreService],
})
export class MotelsCoreModule {}
