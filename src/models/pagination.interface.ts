import { ApiProperty } from "@nestjs/swagger";

export class PaginatedDto<TData> {
    @ApiProperty()
    total: number;
  
    @ApiProperty()
    limit: number;
  
    @ApiProperty()
    page: number;
  
    result: TData[];
  }