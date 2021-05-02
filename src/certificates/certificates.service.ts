import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, mongo } from 'mongoose';

import { Certificate, CertificateDocument } from 'src/schemas/certificate.schema';
import { bot } from '../telegram-bot';
import { IQueryPaginationSearch, PaginatedDto } from 'src/models/pagination.interface';
import { paginateUtils } from 'src/utils/paginate';

export interface IQuerySearchCertificates extends IQueryPaginationSearch {
    userId: string;
    courseId: string;
}


@Injectable()
export class CertificatesService {
    constructor(@InjectModel(Certificate.name) private model: Model<CertificateDocument>) {

    }
    create(data: any): Promise<CertificateDocument> {
        return bot.telegram.getFileLink(data.fileId).then(link => {
            data.fileLink = link.toString();
            return this.model.create(data);
        })
    }

    async findAll(query: Partial<IQuerySearchCertificates>): Promise<PaginatedDto<CertificateDocument[]>> {
        const filter = {
            userId: query.userId ? new Types.ObjectId(query.userId) : undefined,
            courseId: query.courseId ? new Types.ObjectId(query.courseId) : undefined
        }

        const lessons = await paginateUtils(this.model, query, filter)
        return {
            total: lessons?.length,
            limit: query.limit || 20,
            page: query.page || 1,
            result: lessons
        };
    }

    remove(id: string): Promise<CertificateDocument> {
        return this.model.findByIdAndDelete(id).exec();
    }

    async refreshLink(id: string, fileId: string): Promise<CertificateDocument> {
        const fileLink = await bot.telegram.getFileLink(fileId);
        return await this.model.findByIdAndUpdate(id, { $set: { fileLink: String(fileLink) } }, { new: true });
    }
}