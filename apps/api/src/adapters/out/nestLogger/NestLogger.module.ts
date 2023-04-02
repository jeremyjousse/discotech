import { Module } from '@nestjs/common';
import { NestLogger } from './NestLogger.service';

@Module({
  providers: [NestLogger],
  exports: [NestLogger],
})
export class NestLoggerModule {}
