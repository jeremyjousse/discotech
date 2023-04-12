import { Id3Genre } from './Id3Genres';

export type Id3Tags = {
  album: string | null;
  artist: string;
  comments: string | null;
  dateReleased: Date | null; // ??
  genre: Id3Genre | null;
  picture: string | null;
  publisher: string | null;
  rating: number | null;
  rekordboxed: boolean | null;
  title: string;
  toMix: boolean | null;
  trackCount: number | null;
  trackNumber: number | null;
};
