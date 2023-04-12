import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';
import { LibraryController } from './adapters/in/rest/library/library.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { UpdateLibraryUseCase } from './use-cases/update-library/updateLibrary.useCase';
import { DatabaseModule } from './adapters/out/mongoDb/database.module';
import { AppleMusicModule } from './adapters/out/appleMusic/AppleMusic.module';
import { UpdateLibraryUseCaseModule } from './use-cases/update-library/UpdateLibrary.module';
import { LibraryService } from './adapters/in/rest/library/library.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NestLoggerModule } from './adapters/out/nestLogger/NestLogger.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './adapters/in/config/configuration';
export const CommandHandlers = [UpdateLibraryUseCase];

@Module({
  imports: [
    AppleMusicModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    CqrsModule,
    DatabaseModule,
    NestLoggerModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    UpdateLibraryUseCaseModule,
  ],
  controllers: [PingController, LibraryController],
  providers: [PingService, ...CommandHandlers, LibraryService],
})
export class AppModule {}
