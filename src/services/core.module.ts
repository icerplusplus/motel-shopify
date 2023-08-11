import { Module } from '@nestjs/common';
import { MotelsCoreModule } from './motels/motels.core.module';
import { MotelDetailsCoreModule } from './motel-details/motel-details.core.module';
import { FilesModule } from './files/files.module';

const coreModules = [MotelsCoreModule, MotelDetailsCoreModule, FilesModule];
@Module({
  imports: [...coreModules],
  exports: [...coreModules],
})
export class CoreModule {}
