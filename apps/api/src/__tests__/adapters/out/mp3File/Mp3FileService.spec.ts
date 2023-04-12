import * as fs from 'fs';
import { join } from 'path';
import { Mp3FileService } from 'src/adapters/out/mp3File/Mp3File.service';
import { ID3_GENRES } from 'src/domain/models/Id3Genres';
import { Id3Tags } from 'src/domain/models/Id3Tags';

describe('Mp3FileService', () => {
  const cut = new Mp3FileService();

  describe('readId3Tags', () => {
    it('should read empty tags', async () => {
      const emptyTags: Id3Tags = {
        album: null,
        artist: 'Artist',
        comments: null,
        dateReleased: null,
        genre: null,
        picture: null,
        publisher: null,
        rating: null,
        rekordboxed: null,
        title: 'Title',
        toMix: null,
        trackCount: null,
        trackNumber: null,
      };

      const emptyTagsRead = cut.readId3Tags(
        join(__dirname, '..', '..', '..', 'resources', 'mp3', 'empty.mp3'),
      );

      expect(emptyTagsRead).toEqual(emptyTags);
    });

    it('should read full tags', async () => {
      const fullTags: Id3Tags = {
        album: 'Album',
        artist: 'Artist',
        comments: 'Comments',
        dateReleased: new Date('2023-04-21T00:00:00.000Z'),
        genre: ID3_GENRES.Techno,
        picture: null, // TODO add picture
        publisher: 'Publisher',
        rating: 5,
        rekordboxed: true,
        title: 'Title',
        toMix: true,
        trackCount: 1,
        trackNumber: 1,
      };

      const fullTagsRead = cut.readId3Tags(
        join(
          __dirname,
          '..',
          '..',
          '..',
          'resources',
          'mp3',
          'fileWithFullId3tags.mp3',
        ),
      );

      expect(fullTagsRead).toEqual(fullTags);
    });
  });

  describe('writeId3Tags', () => {
    it('should write full tags and returns same value', async () => {
      const mp3FileDirectory = join(
        __dirname,
        '..',
        '..',
        '..',
        'resources',
        'mp3',
      );
      fs.copyFileSync(
        join(mp3FileDirectory, 'empty.mp3'),
        join(mp3FileDirectory, 'testing.mp3'),
      );
      const dateReleased = new Date();
      dateReleased.setUTCHours(0, 0, 0, 0);

      const fullTags: Id3Tags = {
        album: 'Album',
        artist: 'Artist',
        comments: 'Comments',
        dateReleased,
        genre: ID3_GENRES.Techno,
        picture: null, // TODO add picture
        publisher: 'Publisher',
        rating: 5,
        rekordboxed: true,
        title: 'Title',
        toMix: true,
        trackCount: 1,
        trackNumber: 1,
      };
      const fullTagsWritten = cut.writeId3Tags(
        join(__dirname, '..', '..', '..', 'resources', 'mp3', 'testing.mp3'),
        fullTags,
      );

      fs.rmSync(join(mp3FileDirectory, 'testing.mp3'));

      expect(fullTagsWritten).toEqual(fullTags);
    });
  });
});
