import { Module } from '@nestjs/common';
import { MotelDetailsCoreService } from './motel-details.core.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotelDetailEntity } from '@/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([MotelDetailEntity])],
  controllers: [],
  providers: [MotelDetailsCoreService],
  exports: [MotelDetailsCoreService],
})
export class MotelDetailsCoreModule {}
