import { ICommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MongoTrackRepositoryService } from 'src/adapters/out/mongoDb/MongoTrackRepository.service';
import { NestLogger } from 'src/adapters/out/nestLogger/NestLogger.service';
import { LibraryFileListingQuery } from './LibraryFileListing.query';
import { LibraryFileListingDto } from './LibraryFileListing.dto';
import { AppleMusicLibraryService } from 'src/adapters/out/appleMusic/AppleMusicLibrary.service';

@QueryHandler(LibraryFileListingQuery)
export class LibraryFileListingUseCase
  implements IQueryHandler<LibraryFileListingQuery>
{
  constructor(
    private readonly trackRepository: MongoTrackRepositoryService,
    private readonly logger: NestLogger,
  ) {
    this.logger.setContext('LibraryFileListingUseCase');
  }

  async execute(
    query: LibraryFileListingQuery,
  ): Promise<LibraryFileListingDto> {
    this.trackRepository.findAll(query);

    return {} as LibraryFileListingDto;
    // this.logger.log('Updating library');
    // const auditResult: UpdateLibraryDto = {
    //   added: 0,
    //   deleted: 0,
    //   updated: 0,
    // };

    // // Tracks in bd
    // const beforeUpdateLibraryFiles =
    //   await this.trackRepository.findAllForLibraryUpdate();
    // this.logger.log(
    //   `${beforeUpdateLibraryFiles.length} files existing in track repository`,
    // );
    // const beforeUpdateTracksPersistentIds = beforeUpdateLibraryFiles.reduce(
    //   (acc, curr) => ({ ...acc, [curr.persistentId]: curr }),
    //   {},
    // );

    // // recover Apple Music library files
    // const libraryTracks = await this.libraryService.update();
    // this.logger.log(`Found ${libraryTracks.length} files to import`);
    // const libraryTracksPersistentIds = libraryTracks.reduce(
    //   (acc, curr) => ({ ...acc, [curr.persistentId]: curr }),
    //   {},
    // );

    // // track to delete in db
    // beforeUpdateLibraryFiles.forEach((inDbTrack) => {
    //   if (libraryTracksPersistentIds[inDbTrack.persistentId] === undefined) {
    //     this.trackRepository.delete(inDbTrack.persistentId);
    //     auditResult.deleted++;
    //   }
    // });

    // for (const key in libraryTracksPersistentIds) {
    //   if (beforeUpdateTracksPersistentIds[key] === undefined) {
    //     auditResult.added++;
    //   } else if (
    //     libraryTracksPersistentIds[key].dateUpdated >
    //     beforeUpdateTracksPersistentIds[key].dateUpdated
    //   ) {
    //     auditResult.updated++;
    //   } else {
    //     continue;
    //   }

    //   await this.trackRepository.create(libraryTracksPersistentIds[key]);
    // }
    // this.logger.log(`Library updated with ${JSON.stringify(auditResult)}`);
    // return auditResult;
  }
}
