import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ECourseStatus } from 'src/courses/entities/course.entity';

export type PagesDocument = Page & mongoose.Document;

@Schema({ versionKey: false })
export class Page {

    @Prop()
    readonly id: mongoose.Types.ObjectId;

    @Prop({ default: null, required: true })
    type: Number

    @Prop({ default: null })
    content: string;

    @Prop({ default: Date.now() })
    createdAt: number;

    @Prop({ default: Date.now() })
    updatedAt: number;
}

export const PagesSchema = SchemaFactory.createForClass(Page);