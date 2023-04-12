export type AppleMusicTracks = {
  [id: string]: AppleMusicTrack;
};
export type AppleMusicTrack = {
  Album: string;
  'Album Rating': number;
  'Album Rating Computed': boolean;
  Artist: string;
  'Artwork Count': number;
  'Bit Rate': number;
  Genre: string;
  'Date Added': Date; // ??
  'Date Modified': Date; // ??
  'File Folder Count': number;
  Location: string;
  'Library Folder Count': number;
  Name: string;
  Normalization: number;
  Kind: string;
  'Persistent ID': string;
  Rating: number;
  'Release Date': Date; // ??
  'Sample Rate': number;
  Size: number;
  'Total Time': number;
  'Track Count': number;
  'Track ID': string;
  'Track Number': number;
  'Track Type': string;
  Year: number;
};
