import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { PaginationQuery } from 'src/domain/value-objects/pagination';

export class LibraryFileListingQuery {
  constructor(
    public readonly filters: LibraryFileListingFilters,
    public readonly pagination: PaginationQuery,
    public readonly sort: string,
  ) {}
}

export class LibraryFileListingFilters {
  @IsOptional()
  @IsString()
  public readonly album: string;

  @IsOptional()
  @IsString()
  public readonly artist: string;

  @IsOptional()
  @IsBoolean()
  public readonly completed: boolean;
  // public readonly genre: string, // TODO check if better type
  @IsOptional()
  @IsBoolean()
  public readonly hasCover: boolean;

  @IsOptional()
  @IsBoolean()
  public readonly searchStatus: boolean;

  @IsOptional()
  @IsString()
  public readonly title: string;
}
