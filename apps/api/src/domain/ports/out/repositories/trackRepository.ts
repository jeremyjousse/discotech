import { LibraryTrack, Track } from 'src/domain/models/Track';

export interface TrackRepository {
  create(libraryTrack: LibraryTrack): Promise<LibraryTrack>;

  findAllForLibraryUpdate(): Promise<Track[]>;

  delete(trackPersistentId: string): Promise<boolean>;
}
