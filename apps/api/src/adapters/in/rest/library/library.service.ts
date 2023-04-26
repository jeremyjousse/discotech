import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { LibraryFileListingDto } from 'src/application/use-cases/library-file-listing/LibraryFileListing.dto';
import { LibraryFileListingQuery } from 'src/application/use-cases/library-file-listing/LibraryFileListing.query';
import { UpdateLibraryCommand } from 'src/application/use-cases/update-library/UpdateLibrary.command';
import { UpdateLibraryDto } from 'src/application/use-cases/update-library/UpdateLibrary.dto';

@Injectable()
export class LibraryService {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  // async libraryFileListing(): Promise<LibraryFileListingDto> {
  //   console.log('libraryFileListing');
  //   const libraryFileListingQueryParams: LibraryFileListingQuery = {
  //     album: null,
  //     artist: 'Giuseppe',
  //     completed: null,
  //     genre: null,
  //     hasCover: null,
  //     searchStatus: null,
  //     title: null,
  //     pagination: { pageNumber: 1, pageSize: 20 },
  //     sort: { direction: null, by: null },
  //   };
  //   return await this.queryBus.execute(
  //     new LibraryFileListingQuery(
  //       null,
  //       'Giuseppe',
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       { pageNumber: 1, pageSize: 20 },
  //       { direction: null, by: null },
  //     ),
  //   );
  //   // return await this.queryBus.execute(libraryFileListingQueryParams);
  // }

  async updateLibrary(): Promise<UpdateLibraryDto> {
    return await this.commandBus.execute(new UpdateLibraryCommand());
  }
}
