import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginatedDto } from 'src/models/pagination.interface';
import { Page, PagesDocument } from 'src/schemas/pages.schema';
import { paginateUtils } from 'src/utils/paginate';
import { EditPageDto } from './dto/edit-page.dto';
import { IQuerySearchPages } from './entities/page.entity';

@Injectable()
export class PagesService {
    constructor(@InjectModel(Page.name) private model: Model<PagesDocument>) {

    }
    async create(body: EditPageDto): Promise<PagesDocument> {
        if (await this.model.exists({ name: body.name })) {
            throw new BadRequestException('Сторінка з такою назвою уже існує!')
        } else {
            const page = new this.model(body);
            return page.save();
        }
    }

    async edit(body: EditPageDto): Promise<PagesDocument> {
        if (await this.model.exists({ type: body.type })) {
            return this.model.findOneAndUpdate({ type: body.type }, body, { new: true }).exec();
        } else {
            throw new NotFoundException('Сторінка не існує!');
        }
    }

    async findAll(query: IQuerySearchPages): Promise<PaginatedDto<PagesDocument[]>> {
        const filter = {
            type: Number.isNaN(+query.type) ? null : query.type,
            path: query?.path && query.path !== 'null' ? query.path : null
        }


        const lessons = await paginateUtils(this.model, {
            page: query.page,
            limit: query.limit
        }, filter);

        return {
            total: lessons?.length || 0,
            limit: Number(query?.limit) || 20,
            page: Number(query.page) || 1,
            result: lessons
        };
    }
}
