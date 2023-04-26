import { PaginationResponse } from 'shared-domain';
import { LibraryTrack } from 'src/domain/models/Track';

export type LibraryFileListingDto = {
  items: LibraryTrack[];
  pagination: PaginationResponse;
};

// export type LibraryFile = {
//   id: number;
//   persistentId: string;
//   artist: string;
//   album: string;
//   completed: boolean;
//   createdAt: Date;
//   genre: string; // enum
//   hasCover: boolean;
//   rating: number;
//   searchStatus: string; // enum
//   title: string;
// };

/*
import { ItunesFile } from '../entities/itunes-file.entity';
import { ApiPaginationResponseDto } from '../../shared/api/pagination.dto';

export interface ItunesFilesPaginatedDto {
  items: ItunesFile[];
  pagination: ApiPaginationResponseDto;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Genres from 'src/shared/configuration/id3-genres';

export const SearchStatues = {
  NOT_SEARCHED: 'Not Searched',
  FOUND: 'Found',
  NOT_FOUND: 'Not Found',
};

export interface ItunesFile {
  persistentId: string;
  artist: string;
  album: string;
  bitRate: number;
  completed: boolean;
  comments: string;
  createdAt: Date;
  genre: string;
  hasCover: boolean;
  length: number;
  rating: number;
  releaseDate: Date;
  sampleRate: number;
  searchedAt: Date;
  searchStatus: string;
  size: number;
  title: string;
  trackCount: number;
  trackNumber: number;
  updatedAt: Date;
  year: number;
}

@Entity('itunes_file')
export class ItunesFileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  persistentId: string;

  @Column({ nullable: true })
  artist: string;

  @Column({ nullable: true })
  album: string;

  @Column()
  bitRate: number;

  @Column({ nullable: true })
  comments: string;

  @Column({ default: false })
  completed: boolean;

  @Column()
  createdAt: Date;

  @Column({ nullable: true, type: 'enum', enum: Genres, default: Genres[0] })
  genre: string; // TODO get genres from fixed list and shared with frontend


  @Column({ nullable: true, default: false })
  hasCover: boolean;

  @Column()
  length: number;

  @Column({ nullable: true })
  rating: number;

  @Column({ nullable: true })
  releaseDate: Date;

  @Column()
  sampleRate: number;

  @Column({ nullable: true })
  searchedAt: Date;

  @Column({
    nullable: true,
    type: 'enum',
    enum: SearchStatues,
    default: SearchStatues.NOT_SEARCHED,
  })
  searchStatus: string;

  @Column()
  size: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  trackCount: number;

  @Column({ nullable: true })
  trackNumber: number;

  @Column()
  updatedAt: Date;

  @Column({ nullable: true })
  year: number;
}

export interface ApiPaginationResponseDto {
  filteredItems: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export interface Id3TagsDto {
  album: string;
  artist: string;
  comments: string;
  genre: string;
  picture: string;
  publisher: string;
  rating: number;
  rekordboxed: boolean;
  releaseDate: string;
  title: string;
  toMix: boolean;
  trackCount: number;
  trackNumber: number;
}

import {
  IsOptional,
  IsString,
  IsNumberString,
  IsBooleanString,
} from 'class-validator';


export class ItunesFilesApiFilterDto {
  @IsOptional()
  @IsString()
  album: string;

  @IsOptional()
  @IsString()
  artist: string;

  @IsOptional()
  @IsBooleanString()
  completed: boolean;

  @IsOptional()
  @IsBooleanString()
  hasCover: boolean;

  @IsOptional()
  @IsString()
  genre: string;

  @IsOptional()
  @IsString()
  searchStatus: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsNumberString()
  year: number;

  @IsOptional()
  @IsNumberString()
  page: number;

  @IsOptional()
  @IsString()
  order: string;

  @IsOptional()
  @IsString()
  sort: string;

  @IsOptional()
  @IsNumberString()
  limit: number;
}
*/
