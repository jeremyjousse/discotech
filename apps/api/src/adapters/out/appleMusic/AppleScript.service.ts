import '@jxa/global-type';
import { run } from '@jxa/run';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppleScriptService {
  /**
   * Update Music XML library file which is parsed in order to list
   * all your mp3 files
   *
   * @returns Promise<Void>
   */
  public updateMusicLibraryXmlFile = (): Promise<void> => {
    // TODO check if export folder exists
    // Or sanitize check at app boot
    return run((libraryPath) => {
      const music = Application('Music');
      music.playlists[0].export({
        as: 'XML',
        to: libraryPath,
      });
    }, process.env.APPLE_MUSIC_LIBRARY_EXPORT_FILE_PATH);
  };
}
