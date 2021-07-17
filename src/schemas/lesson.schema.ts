import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ECourseStatus } from 'src/courses/entities/course.entity';

export type LessonDocument = Lesson & mongoose.Document;

@Schema()
export class Lesson {

    @Prop()
    readonly id: mongoose.Types.ObjectId;

    @Prop({ default: null, required: true })
    name: string;

    @Prop({ default: null })
    context: string;

    @Prop({ default: null, ref: 'courses', required: true })
    courseId: mongoose.Types.ObjectId;

    @Prop({ default: false })
    free: boolean;

    @Prop({ default: ECourseStatus.DRAFT })
    status: number;

    @Prop({ default: Date.now() })
    createdAt: number;

    @Prop({ default: Date.now() })
    updatedAt: number;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);