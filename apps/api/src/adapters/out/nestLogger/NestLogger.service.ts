import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { Logger } from 'src/domain/ports/out/logger/logger';

@Injectable({ scope: Scope.TRANSIENT })
export class NestLogger extends ConsoleLogger implements Logger {
  log(message: any) {
    super.log(message);
  }
  error(message: any) {
    super.error(message);
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
