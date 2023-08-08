import { Module } from '@nestjs/common';
import { MotelsModule } from './motels/motels.module';

const apis = [MotelsModule];

@Module({
  imports: [...apis],
  exports: [...apis],
})
export class ApiModule {}
