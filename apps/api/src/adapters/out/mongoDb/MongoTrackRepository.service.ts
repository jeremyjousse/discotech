import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { MongooseTrack } from './schemas/Track.schema';
import { TrackRepository } from 'src/domain/ports/out/repositories/trackRepository';
import { LibraryTrack, Track } from 'src/domain/models/Track';
import {
  LibraryFileListingFilters,
  LibraryFileListingQuery,
} from 'src/application/use-cases/library-file-listing/LibraryFileListing.query';
import { LibraryFileListingDto } from 'src/application/use-cases/library-file-listing/LibraryFileListing.dto';
import { NestLogger } from '../nestLogger/NestLogger.service';
import { TrackMapper } from './track.mapper';

@Injectable()
export class MongoTrackRepositoryService implements TrackRepository {
  private readonly mapper: TrackMapper;
  constructor(
    @InjectModel(MongooseTrack.name) private trackModel: Model<MongooseTrack>,
    private readonly logger: NestLogger,
  ) {
    this.logger.setContext('MongoTrackRepositoryService');
    this.mapper = new TrackMapper();
  }

  async create(createTrackDto: LibraryTrack): Promise<LibraryTrack> {
    return this.trackModel.findOneAndUpdate(
      { persistentId: createTrackDto.persistentId },
      createTrackDto,
      { upsert: true },
    );
  }

  async findAll(
    query: LibraryFileListingQuery,
  ): Promise<LibraryFileListingDto> {
    // generate sort order
    // let sortOrder = {};
    // if (filter.sort == null) {
    //   sortOrder = {
    //     createdAt: 'ASC',
    //   };
    // } else {
    //   sortOrder[filter.sort.by] = 'DESC';
    // }

    // TODO promise all or RX equivalent
    this.logger.log(JSON.stringify(this.generateFindFilter(query.filters)));

    const findData = await this.trackModel
      .find(this.generateFindFilter(query.filters))
      .exec();

    console.log(JSON.stringify(findData));

    const items = findData.map((item) => this.mapper.toDomain(item));

    // const myFilter = { title: /.*Bang.*/i };
    // const findData2 = await this.trackModel.find(myFilter).exec();

    // console.log(JSON.stringify(findData2));
    // // ,
    // order: sortOrder,
    // skip: (filter.pagination.pageNumber - 1) * filter.pagination.pageSize,
    // take: filter.pagination.pageSize,
    const total = await this.trackModel.count().exec();

    return {
      items: {},
      pagination: {
        filteredItems: 0,
        totalItems: total,
        pageNumber: 0,
        pageSize: 0,
      },
    } as LibraryFileListingDto;
  }

  async findAllForLibraryUpdate(): Promise<Track[]> {
    // TODO add mapper
    return [];
    // return this.trackModel.find({}, { persistentId: 1, dateUpdated: 1 }).exec();
  }

  async delete(trackPersistentId: string): Promise<boolean> {
    const deleteResult = await this.trackModel
      .deleteOne({
        persistentId: trackPersistentId,
      })
      .exec();
    return deleteResult.deletedCount === 1 ? true : false;
  }

  private generateFindFilter(filter: LibraryFileListingFilters): any {
    return Object.keys(filter)
      .filter((key) => {
        // this.logger.log(`${key}, ${filter[key]}`);
        // this.logger.log(new RegExp('.*' + filter[key] + '.*', 'i'));
        return filter[key] != null && filter[key] != '';
      })
      .reduce((res, key) => {
        res[key] = ['genre', 'completed', 'searchStatus', 'hasCover'].includes(
          key,
        )
          ? filter[key]
          : new RegExp('.*' + filter[key] + '.*', 'i');
        console.log(res);
        return res;
      }, {});
  }
}
