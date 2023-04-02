import { AppleMusicLibraryXmlReaderService } from '../../../../adapters/out/appleMusic/AppleMusicLibraryXmlReader.service';
import { join } from 'path';

describe('AppleMusicLibraryXmlReaderService', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  describe('read', () => {
    it('should return eligilbe files', async () => {
      process.env.APPLE_MUSIC_LIBRARY_EXPORT_FILE_PATH = join(
        __dirname,
        '../../../resources/library.xml',
      );
      const appleMusicLibraryXmlReaderService =
        new AppleMusicLibraryXmlReaderService();

      const libraryTracks = appleMusicLibraryXmlReaderService.read();
      expect(libraryTracks.length).toBe(3);
    });
  });
});
