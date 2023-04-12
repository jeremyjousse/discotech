import { Id3Genre } from './Id3Genres';

export type Id3Tags = {
  album: string;
  artist: string;
  comments: string;
  dateReleased: Date; // ??
  genre: Id3Genre;
  picture: string;
  publisher: string;
  rating: number;
  rekordboxed: boolean;
  title: string;
  toMix: boolean;
  trackCount: number;
  trackNumber: number;
};
