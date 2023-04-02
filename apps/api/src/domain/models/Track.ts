import { Id3Genre } from './Id3Genres';
import { Id3Tags } from './Id3Tags';

export type Track = {
  bitRate: number;
  duration: number;
  dateAdded: Date; // ??
  dateUpdated: Date; // ??
  id3Tags: Id3Tags;
  location: string; // path ??
  persistentId: string;
  sampleRate: number;
  size: number;
};

export type LibraryTrack = {
  album: string;
  artist: string;
  bitRate: number;
  duration: number;
  genre: Id3Genre;
  dateAdded: Date;
  dateUpdated: Date;
  dateReleased: Date;
  hasPicture: boolean;
  path: string;
  title: string;
  persistentId: string;
  rating: number;
  sampleRate: number;
  size: number;
  trackCount: number;
  trackNumber: number;
};
