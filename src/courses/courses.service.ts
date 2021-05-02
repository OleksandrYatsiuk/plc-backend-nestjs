import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Model } from 'mongoose';
import { CourseDocument } from 'src/schemas/course.schema';
import { InjectModel } from '@nestjs/mongoose';
import { PaginatedDto } from 'src/models/pagination.interface';


@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private model: Model<CourseDocument>,) {

  }
  create(createCourseDto: CreateCourseDto): Promise<CourseDocument> {
    const course = new this.model(createCourseDto);
    return course.save();
  }
  async findAll(page: number, limit: number): Promise<PaginatedDto<CourseDocument[]>> {
    page = page - 1;
    const count = await this.model.countDocuments();
    const lessons = await this.model.find().sort({ createdAt: 1 }).limit(limit).skip(limit * page);
    return {
      total: count, limit, page: page + 1,
      result: lessons
    };
  }

  findOne(id: string): Promise<CourseDocument | NotFoundException> {
    return this.model.findById(id).exec()
      .then(course => {
        if (!course) {
          throw new NotFoundException('Курс не знайдений');
        }
        return course;
      })
  }

  update(id: string, updateCourseDto: UpdateCourseDto): Promise<CourseDocument> {
    return this.model.findByIdAndUpdate(id, { $set: updateCourseDto }, { new: true }).exec();
  }

  remove(id: string): Promise<CourseDocument> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
