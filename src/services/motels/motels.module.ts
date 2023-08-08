import { Module } from '@nestjs/common';
import { MotelsService } from './motels.service';
import { MotelsController } from './motels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotelEntity } from '@/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([MotelEntity])],
  controllers: [MotelsController],
  providers: [MotelsService],
  exports: [MotelsService],
})
export class MotelsModule {}
