import * as fs from 'fs';
import * as plist from 'plist';
import { AppleMusicTrack, AppleMusicTracks } from './model';
import { LibraryTrack } from 'src/domain/models/Track';
import { Id3Genre } from 'src/domain/models/Id3Genres';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppleMusicLibraryXmlReaderService {
  private static AUDIO_FILE = 'MPEG';

  public read = (): LibraryTrack[] => {
    const parsed: AppleMusicTracks = plist.parse(
      fs.readFileSync(this.xmlLibraryPath(), { encoding: 'utf8', flag: 'r' }),
    );
    return Object.keys(parsed.Tracks)
      .map((key) => parsed.Tracks[key] as AppleMusicTrack)
      .filter((track) => this.isEligible(track))
      .map((track) => this.appleMusicTrackToLibraryTrack(track));
  };

  private xmlLibraryPath(): string {
    return process.env.APPLE_MUSIC_LIBRARY_EXPORT_FILE_PATH;
  }

  private isEligible = (track: AppleMusicTrack): boolean => {
    return track.Kind.includes(AppleMusicLibraryXmlReaderService.AUDIO_FILE);
  };

  private appleMusicTrackToLibraryTrack = (
    appleMusicTrack: AppleMusicTrack,
  ): LibraryTrack => {
    return {
      album: appleMusicTrack.Album,
      artist: appleMusicTrack.Artist,
      bitRate: appleMusicTrack['Bit Rate'],
      duration: appleMusicTrack['Total Time'],
      genre: appleMusicTrack.Genre as Id3Genre,
      dateAdded: appleMusicTrack['Date Added'],
      dateUpdated: appleMusicTrack['Date Modified'],
      dateReleased: appleMusicTrack['Release Date'],
      hasPicture: appleMusicTrack['Artwork Count'] > 0 ? true : false,
      path: appleMusicTrack.Location,
      title: appleMusicTrack.Name,
      persistentId: appleMusicTrack['Persistent ID'],
      rating: appleMusicTrack.Rating,
      sampleRate: appleMusicTrack['Sample Rate'],
      size: appleMusicTrack.Size,
      trackCount: appleMusicTrack['Track Count'],
      trackNumber: appleMusicTrack['Track Number'],
    };
  };
}
