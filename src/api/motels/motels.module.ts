import { Module } from '@nestjs/common';
import { MotelsService } from './motels.service';
import { MotelsCoreModule } from '@/services/motels/motels.core.module';
import { MotelsController } from './motels.controller';
import { FilesModule } from '@/services/files/files.module';

@Module({
  imports: [MotelsCoreModule, FilesModule],
  controllers: [MotelsController],
  providers: [MotelsService],
  exports: [MotelsService],
})
export class MotelsModule {}
