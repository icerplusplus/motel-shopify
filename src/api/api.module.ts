import { Module } from '@nestjs/common';
import { MotelsModule } from './motels/motels.module';
import { MotelDetailsModule } from './motel-details/motel-details.module';

const apis = [MotelsModule, MotelDetailsModule];

@Module({
  imports: [...apis],
  exports: [...apis],
})
export class ApiModule {}
