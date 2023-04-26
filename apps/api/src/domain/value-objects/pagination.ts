import { Type } from 'class-transformer';
import { IsIn, IsNumber, IsOptional, Min } from 'class-validator';

export class PaginationQuery {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly page: number = 1;

  @IsOptional()
  @IsNumber()
  @IsIn([10, 20, 50, 100])
  @Type(() => Number)
  readonly page_size: number = 10;
}

export class PaginationResponse {
  readonly filtered: number;
  readonly total: number;
  readonly page: number;
  readonly page_size: number;
}
