import { ApiProperty } from '@nestjs/swagger';

export class PaginatedDto<T = any[]> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  page: number;

  result: T;
}


export interface IQueryPaginationSearch {
  limit: number;
  page: number
}