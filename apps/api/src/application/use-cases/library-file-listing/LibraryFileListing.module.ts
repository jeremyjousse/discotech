import { Module } from '@nestjs/common';

import { AppleMusicModule } from 'src/adapters/out/appleMusic/AppleMusic.module';
import { DatabaseModule } from 'src/adapters/out/mongoDb/database.module';
import { NestLoggerModule } from 'src/adapters/out/nestLogger/NestLogger.module';
import { LibraryFileListingUseCase } from './LibraryFileListing.useCase';

@Module({
  imports: [AppleMusicModule, DatabaseModule, NestLoggerModule],
  providers: [LibraryFileListingUseCase],
  exports: [LibraryFileListingUseCase],
})
export class LibraryFileListingUseCaseModule {}
