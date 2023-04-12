import { Module } from '@nestjs/common';
import { AppleMusicLibraryXmlReaderService } from './AppleMusicLibraryXmlReader.service';
import { AppleScriptService } from './AppleScript.service';
import { AppleMusicLibraryService } from './AppleMusicLibrary.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    AppleMusicLibraryService,
    AppleMusicLibraryXmlReaderService,
    AppleScriptService,
  ],
  exports: [
    AppleMusicLibraryService,
    AppleMusicLibraryXmlReaderService,
    AppleScriptService,
  ],
})
export class AppleMusicModule {}
