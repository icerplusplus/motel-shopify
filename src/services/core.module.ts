import { Module } from '@nestjs/common';
import { MotelsCoreModule } from './motels/motels.core.module';

const coreModules = [MotelsCoreModule];
@Module({
  imports: [...coreModules],
  exports: [...coreModules],
})
export class CoreModule {}
