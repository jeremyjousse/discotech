import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestLogger } from './adapters/out/nestLogger/NestLogger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.enableCors();
  app.useLogger(new NestLogger());
  await app.listen(4000);
}
bootstrap();
