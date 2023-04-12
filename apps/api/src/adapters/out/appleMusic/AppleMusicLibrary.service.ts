import { Library } from 'src/domain/ports/out/library/library';
import { LibraryTrack } from 'src/domain/models/Track';
import { AppleScriptService } from './AppleScript.service';
import { Injectable } from '@nestjs/common';
import { AppleMusicLibraryXmlReaderService } from './AppleMusicLibraryXmlReader.service';

@Injectable()
export class AppleMusicLibraryService implements Library {
  constructor(
    private appleScriptService: AppleScriptService,
    private appleLibraryXmlReaderService: AppleMusicLibraryXmlReaderService,
  ) {}
  async update(): Promise<LibraryTrack[]> {
    await this.appleScriptService.updateMusicLibraryXmlFile();
    return this.appleLibraryXmlReaderService.read();
  }
}
