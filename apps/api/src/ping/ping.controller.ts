import { Controller, Get } from '@nestjs/common';
import { PingService } from './ping.service';
import { Ping } from './ping.types';

@Controller()
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get('/ping')
  getHello(): Ping {
    return this.pingService.ping();
  }
}
