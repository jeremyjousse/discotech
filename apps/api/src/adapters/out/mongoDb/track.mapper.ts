import { MongooseTrack } from './schemas/Track.schema';
import { Track } from 'src/domain/models/Track';

export class TrackMapper {
  toDomain(record: MongooseTrack): Track {
    const entity = new Track({
      bitRate: record.bitRate,
      duration: record.duration,
      dateAdded: record.dateAdded,
      dateUpdated: record.dateUpdated,
      id3Tags: null,
      location: record.location,
      persistentId: record.persistentId,
      sampleRate: record.sampleRate,
      size: record.size,
    });
    return entity;
  }
}
