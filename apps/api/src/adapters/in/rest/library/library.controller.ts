import { Controller, Put } from '@nestjs/common';
import { LibraryService } from './library.service';
import { UpdateLibraryDto } from 'src/use-cases/update-library/UpdateLibrary.dto';

@Controller()
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Put('/library')
  async updateLibrary(): Promise<UpdateLibraryDto> {
    return this.libraryService.updateLibrary();
  }
}
