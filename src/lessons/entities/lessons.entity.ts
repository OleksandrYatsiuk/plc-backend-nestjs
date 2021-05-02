import { IQueryPaginationSearch } from "src/models/pagination.interface";

export interface Lesson {
    readonly _id: string,
    name: string,
    context: string;
    presentation: string;
    courseId: string;
    free: boolean;
    status: number;
    createdAt: number;
    updatedAt: number;
}

export interface IQuerySearchLessons extends IQueryPaginationSearch {

}