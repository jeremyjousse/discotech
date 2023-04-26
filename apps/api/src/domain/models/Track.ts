import { Id3Genre } from './Id3Genres';
import { Id3Tags } from './Id3Tags';

export class Track {
  readonly bitRate: number;
  readonly duration: number;
  readonly dateAdded: Date;
  readonly dateUpdated: Date;
  readonly id3Tags: Id3Tags;
  readonly location: string;
  readonly persistentId: string;
  readonly sampleRate: number;
  readonly size: number;

  constructor(props: TrackType) {
    this.bitRate = props.bitRate;
    this.duration = props.duration;
    this.dateAdded = props.dateAdded;
    this.dateUpdated = props.dateUpdated;
    this.id3Tags = props.id3Tags;
    this.location = props.location;
    this.persistentId = props.persistentId;
    this.sampleRate = props.sampleRate;
    this.size = props.size;
  }
}

export type TrackType = {
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

export class LibraryTrack {
  readonly album: string;
  readonly artist: string;
  readonly bitRate: number;
  readonly duration: number;
  readonly genre: Id3Genre;
  readonly dateAdded: Date;
  readonly dateUpdated: Date;
  readonly dateReleased: Date;
  readonly hasPicture: boolean;
  readonly path: string;
  readonly title: string;
  readonly persistentId: string;
  readonly rating: number;
  readonly sampleRate: number;
  readonly size: number;
  readonly trackCount: number;
  readonly trackNumber: number;

  constructor(props: LibraryTrackType) {
    this.album = props.album;
    this.artist = props.artist;
    this.bitRate = props.bitRate;
    this.duration = props.duration;
    this.genre = props.genre;
    this.dateAdded = props.dateAdded;
    this.dateUpdated = props.dateUpdated;
    this.dateReleased = props.dateReleased;
    this.hasPicture = props.hasPicture;
    this.path = props.path;
    this.title = props.title;
    this.persistentId = props.persistentId;
    this.rating = props.rating;
    this.sampleRate = props.sampleRate;
    this.size = props.size;
    this.trackCount = props.trackCount;
    this.trackNumber = props.trackNumber;
  }
}

export type LibraryTrackType = {
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
