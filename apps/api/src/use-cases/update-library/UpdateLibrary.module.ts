import { Module } from '@nestjs/common';
import { UpdateLibraryUseCase } from './updateLibrary.useCase';
import { AppleMusicModule } from 'src/adapters/out/appleMusic/AppleMusic.module';
import { DatabaseModule } from 'src/adapters/out/mongoDb/database.module';
import { NestLoggerModule } from 'src/adapters/out/nestLogger/NestLogger.module';

@Module({
  imports: [AppleMusicModule, DatabaseModule, NestLoggerModule],
  providers: [UpdateLibraryUseCase],
  exports: [UpdateLibraryUseCase],
})
export class UpdateLibraryUseCaseModule {}
