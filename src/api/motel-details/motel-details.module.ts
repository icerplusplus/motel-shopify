import { Module } from '@nestjs/common';
import { MotelDetailsService } from './motel-details.service';
import { MotelDetailsController } from './motel-details.controller';
import { MotelDetailsCoreModule } from '@/services/motel-details/motel-details.core.module';
import { MotelsCoreModule } from '@/services/motels/motels.core.module';

@Module({
  imports: [MotelsCoreModule, MotelDetailsCoreModule],
  controllers: [MotelDetailsController],
  providers: [MotelDetailsService],
  exports: [MotelDetailsService],
})
export class MotelDetailsModule {}
