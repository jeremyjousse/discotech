import { read, write } from 'node-id3';
import { Id3Tags } from 'src/domain/models/Id3Tags';
import { Mp3FileReader } from 'src/domain/ports/out/file/Mp3File';
import Id3TagsMapper from './Id3TagsMapper';

export class Mp3FileService implements Mp3FileReader {
  public readId3Tags(mp3FilePath: string): Id3Tags {
    return Id3TagsMapper.nodeId3ToDomain(read(mp3FilePath));
  }

  public writeId3Tags(mp3FilePath: string, tags: Id3Tags): Id3Tags {
    write(Id3TagsMapper.domainToNodeId3(tags), mp3FilePath);
    return Id3TagsMapper.nodeId3ToDomain(read(mp3FilePath));
  }
}
