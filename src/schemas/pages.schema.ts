import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PagesDocument = Page & mongoose.Document;

@Schema({ versionKey: false })
export class Page {

    @Prop()
    readonly id: mongoose.Types.ObjectId;

    @Prop({ default: null, required: true })
    type: number;

    @Prop({ default: null, required: true })
    name: string;

    @Prop({ default: null })
    path: string;

    @Prop({ default: null })
    content: string;

    @Prop({ default: Date.now() })
    createdAt: number;

    @Prop({ default: Date.now() })
    updatedAt: number;
}

export const PagesSchema = SchemaFactory.createForClass(Page);