import { LibraryTrack } from 'src/domain/models/Track';

export interface Library {
  update(): Promise<LibraryTrack[]>;
}
