import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER } from './shared/utils/variables';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use validator in global
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(SERVER.PORT);
}
bootstrap();
