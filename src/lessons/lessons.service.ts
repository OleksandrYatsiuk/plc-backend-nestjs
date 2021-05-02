import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginatedDto } from 'src/models/pagination.interface';
import { Lesson, LessonDocument } from 'src/schemas/lesson.schema';
import { paginateUtils } from 'src/utils/paginate';
import { CreateLessonDto } from './dto/create-lesson';
import { IQuerySearchLessons } from './entities/lessons.entity';




@Injectable()
export class LessonsService {
    constructor(@InjectModel(Lesson.name) private model: Model<LessonDocument>) { }

    create(data: CreateLessonDto): Promise<LessonDocument> {
        const lesson = new this.model(data);
        return lesson.save();
    }

    async findAll(query: IQuerySearchLessons): Promise<PaginatedDto<Lesson[]>> {
        const lessons = await paginateUtils(this.model, query);

        return {
            total: lessons?.length || 0,
            limit: query?.limit || 20,
            page: query.page || 1,
            result: lessons
        };
    }

    async findOne(id: string): Promise<LessonDocument> {
        const lesson = await this.model.findById(id).exec();
        if (!lesson) {
            throw new NotFoundException('Курс не знайдений');
        }
        return lesson;
    }

    update(id: string, updateCourseDto: CreateLessonDto): Promise<CreateLessonDto> {
        return this.model.findByIdAndUpdate(id, { $set: updateCourseDto }, { new: true }).exec();
    }

    remove(id: string): Promise<LessonDocument> {
        return this.model.findByIdAndDelete(id).exec();
    }
}
