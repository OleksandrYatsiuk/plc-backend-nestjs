import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, LessonDocument } from 'src/schemas/lesson.schema';
import { CreateLessonDto } from './dto/create-lesson';

@Injectable()
export class LessonsService {
    constructor(@InjectModel(Lesson.name) private model: Model<LessonDocument>) { }

    create(data: CreateLessonDto): Promise<LessonDocument> {
        const lesson = new this.model(data);
        return lesson.save();
    }

    findAll(): Promise<any> {
        return this.model.find().sort('createdAt').exec();
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
