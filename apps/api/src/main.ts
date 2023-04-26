import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestLogger } from './adapters/out/nestLogger/NestLogger.service';
import { LogLevel, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(4000);
}
bootstrap();
