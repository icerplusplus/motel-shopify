import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register()],
  controllers: [],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
