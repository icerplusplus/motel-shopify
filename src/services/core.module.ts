import { Module } from '@nestjs/common';

const coreModules = [];
@Module({
  imports: [...coreModules],
  exports: [...coreModules],
})
export class CoreModule {}
