import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';

@Module({
  imports: [],
  controllers: [PingController],
  providers: [PingService],
})
export class AppModule {}
