import { Module } from '@nestjs/common';
import { MotelsCoreModule } from './motels/motels.core.module';
import { MotelDetailsCoreModule } from './motel-details/motel-details.core.module';

const coreModules = [MotelsCoreModule, MotelDetailsCoreModule];
@Module({
  imports: [...coreModules],
  exports: [...coreModules],
})
export class CoreModule {}
