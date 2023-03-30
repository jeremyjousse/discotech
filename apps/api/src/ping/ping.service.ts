import { Injectable } from '@nestjs/common';
import { Ping } from './ping.types';

@Injectable()
export class PingService {
  ping(): Ping {
    return {
      ping: 'pong',
    };
  }
}
