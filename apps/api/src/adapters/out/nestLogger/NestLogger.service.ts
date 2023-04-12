import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'src/domain/ports/out/logger/logger';

@Injectable({ scope: Scope.TRANSIENT })
export class NestLogger extends ConsoleLogger implements Logger {
  constructor(private configService: ConfigService) {
    super();
  }

  log(message: any) {
    if (this.configService.get<string[]>('logLevel').includes('log')) {
      super.log(message);
    }
  }
  error(message: any) {
    if (this.configService.get<string[]>('logLevel').includes('error')) {
      super.error(message);
    }
  }
  warn(message: any) {
    super.warn(message);
  }
  debug(message: any) {
    super.debug(message);
  }
  verbose(message: any) {
    super.verbose(message);
  }
}
