import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbOptions } from '@/shared/configs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Config environment
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),

    // Public file path
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/',
    }),

    // Database module
    TypeOrmModule.forRoot(dbOptions),

    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
