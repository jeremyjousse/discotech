import { Track } from 'src/adapters/out/mongoDb/schemas/Track.schema';
import { LibraryTrack } from 'src/domain/models/Track';

export interface TrackRepository {
  create(libraryTrack: LibraryTrack): Promise<LibraryTrack>;

  findAllForLibraryUpdate(): Promise<Track[]>;

  delete(trackPersistentId: string): Promise<boolean>;
}
