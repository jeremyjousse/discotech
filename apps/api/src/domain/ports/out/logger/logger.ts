export interface Logger {
  log(message: any, context: string): void;
  error(message: any, context: string): void;
  warn(message: any, context: string): void;
  debug?(message: any, context: string): void;
  verbose?(message: any, context: string): void;
}
