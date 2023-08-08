import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER } from './shared/utils/variables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER.PORT);
}
bootstrap();
