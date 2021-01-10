import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export type CourseDocument = Course & mongoose.Document;

@Schema({ versionKey: false })
export class Course {

    @Prop()
    readonly id: mongoose.Types.ObjectId;

    @Prop({ default: null, required: true })
    name: string;

    @Prop({ default: null })
    description: string;

    @Prop({ default: null })
    price: number;

    @Prop({ default: null })
    status: number;

    @Prop({ default: Date.now() })
    createdAt: number;

    @Prop({ default: Date.now() })
    updatedAt: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);