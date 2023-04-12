import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Track } from './schemas/Track.schema';
import { TrackRepository } from 'src/domain/ports/out/repositories/trackRepository';
import { LibraryTrack } from 'src/domain/models/Track';

@Injectable()
export class MongoTrackRepositoryService implements TrackRepository {
  constructor(@InjectModel(Track.name) private trackModel: Model<Track>) {}

  async create(createTrackDto: LibraryTrack): Promise<LibraryTrack> {
    return this.trackModel.findOneAndUpdate(
      { persistentId: createTrackDto.persistentId },
      createTrackDto,
      { upsert: true },
    );
  }

  async findAllForLibraryUpdate(): Promise<Track[]> {
    return this.trackModel.find({}, { persistentId: 1, dateUpdated: 1 }).exec();
  }

  async delete(trackPersistentId: string): Promise<boolean> {
    const deleteResult = await this.trackModel.deleteOne({
      persistentId: trackPersistentId,
    });
    return deleteResult.deletedCount === 1 ? true : false;
  }
}
