import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Model } from 'mongoose';
import { CourseDocument } from 'src/schemas/course.schema';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private model: Model<CourseDocument>,) {

  }
  create(createCourseDto: CreateCourseDto): Promise<CourseDocument> {
    const course = new this.model(createCourseDto);
    return course.save();
  }

  findAll(): Promise<CourseDocument[]> {
    return this.model.find().sort('createdAt').exec();
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
