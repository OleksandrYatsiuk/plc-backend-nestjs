import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export type UserDocument = User & mongoose.Document;

@Schema({ versionKey: false })
export class User {

    @Prop({ default: null })
    username: string;

    @Prop({ default: null })
    firstName: string;

    @Prop({ default: null })
    lastName: string;

    @Prop({ default: null })
    email: string;

    @Prop({ default: null })
    phone: string;

    @Prop({ default: null })
    chat_id: number;

    @Prop({ default: 0 })
    status: number;

    @Prop({ default: null })
    code: number;

    @Prop({ default: 'subscriber' })
    role: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }])
    courses: string[];

    @Prop({ default: false })
    haveMessages: boolean;

    @Prop({ default: null })
    passwordHash: string;

    @Prop({ default: null })
    accessToken: string;

    @Prop({ default: Date.now() })
    createdAt: number;

    @Prop({ default: Date.now() })
    updatedAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);