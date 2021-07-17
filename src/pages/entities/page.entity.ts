import { IQueryPaginationSearch } from "src/models/pagination.interface";

export interface IQuerySearchPages extends IQueryPaginationSearch {
    type: number;
    path: string
}