import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginatedDto } from 'src/models/pagination.interface';
import { Page, PagesDocument } from 'src/schemas/pages.schema';
import { paginateUtils } from 'src/utils/paginate';
import { EditPageDto } from './dto/edit-page.dto';

@Injectable()
export class PagesService {
    constructor(@InjectModel(Page.name) private model: Model<PagesDocument>) {

    }
    create(body: EditPageDto): Promise<PagesDocument> {
        if (this.model.exists({ type: body.type })) {
            return this.model.updateOne({ type: body.type }, body, { new: true })[0];
        } else {
            const page = new this.model(body);
            return page.save();
        }
    }
    async findAll(filter: Partial<PagesDocument>): Promise<PaginatedDto<PagesDocument[]>> {
        const pages = await paginateUtils(this.model, { page: 1, limit: 20 }, filter);
        return {
            total: pages?.length || 0,
            limit: 20,
            page: 1,
            result: pages
        };
    }
}
