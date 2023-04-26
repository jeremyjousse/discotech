import { Type } from 'class-transformer';
import {
  IsIn,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LibraryFileListingFilters } from 'src/application/use-cases/library-file-listing/LibraryFileListing.query';
import { PaginationRequestDto } from '../base';

export class LibraryFileListingRequest {
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LibraryFileListingFilters)
  readonly filters: LibraryFileListingFilters;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => PaginationRequestDto)
  readonly pagination: PaginationRequestDto = new PaginationRequestDto();

  @IsOptional()
  @IsString()
  @IsIn(['date_added', 'date_added:desc', 'title', 'title:desc'])
  readonly sort: string = 'date_added';
}
