import { IQueryPaginationSearch } from "src/models/pagination.interface";

export class Course {
    _id: string;
    name: string;
    description: string;
    price: number;
    status: number;
    createdAt: number;
    updatedAt: number;
}

export enum ECourseStatus {
    DRAFT = 1,
    PUBLISHED = 2
}

export interface IQuerySearchCourses extends IQueryPaginationSearch {
}