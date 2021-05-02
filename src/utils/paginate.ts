import { Model, Query } from "mongoose";

export function paginateUtils(model: Model<any>, query: any, filter = {}): Query<any[], any> {
    const limit = Number(query.limit || 20);
    const page = Number(query.page - 1 || 0);
    Object.keys(filter).forEach(key => (filter[key] === undefined || filter[key] === null) && delete filter[key]);
    return model.find(filter).sort({ createdAt: 1 }).limit(limit).skip(limit * page);

}