import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

import { PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`🚀 Server running on http://localhost:${PORT}`, 'Bootstrap');
}
bootstrap();
