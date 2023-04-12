import { Id3Tags } from 'src/domain/models/Id3Tags';

export interface Mp3FileReader {
  readId3Tags(mp3FilePath: string): Id3Tags;
}
