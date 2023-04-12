import { Module } from '@nestjs/common';
import { NestLogger } from './NestLogger.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [NestLogger],
  exports: [NestLogger],
})
export class NestLoggerModule {}
