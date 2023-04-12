import { LogLevel } from '@nestjs/common';

export default () => ({
  logLevel: process.env.NEST_LOG_LEVEL.split(' ') as LogLevel[],
  // port: parseInt(process.env.PORT, 10) || 3000,
  // database: {
  //   host: process.env.DATABASE_HOST,
  //   port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  // },
});
