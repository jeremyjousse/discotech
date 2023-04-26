import {
  Controller,
  Get,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateLibraryDto } from 'src/application/use-cases/update-library/UpdateLibrary.dto';
import { LibraryFileListingDto } from 'src/application/use-cases/library-file-listing/LibraryFileListing.dto';
import { LibraryFileListingRequest } from './libraryFileListingRequest.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UpdateLibraryCommand } from 'src/application/use-cases/update-library/UpdateLibrary.command';
import { LibraryFileListingQuery } from 'src/application/use-cases/library-file-listing/LibraryFileListing.query';

@Controller()
export class LibraryController {
  constructor(
    // private readonly libraryService: LibraryService,
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Get('/library')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async libraryFileListing(
    @Query() query: LibraryFileListingRequest,
  ): Promise<LibraryFileListingDto> {
    return await this.queryBus.execute(
      new LibraryFileListingQuery(query.filters, query.pagination, query.sort),
    );
  }

  @Put('/library')
  async updateLibrary(): Promise<UpdateLibraryDto> {
    return await this.commandBus.execute(new UpdateLibraryCommand());
  }
}
