import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateLibraryCommand } from 'src/use-cases/update-library/UpdateLibrary.command';
import { UpdateLibraryDto } from 'src/use-cases/update-library/UpdateLibrary.dto';

@Injectable()
export class LibraryService {
  constructor(private commandBus: CommandBus) {}

  async updateLibrary(): Promise<UpdateLibraryDto> {
    return await this.commandBus.execute(new UpdateLibraryCommand());
  }
}
