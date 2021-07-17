import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { EContentTypes, EMessageTypes } from 'src/messages/entities/message.entity';

export type MessageDocument = Message & mongoose.Document;

@Schema({ versionKey: false })
export class Message {

    @Prop()
    readonly id: mongoose.Types.ObjectId;

    @Prop({ default: null, required: true, ref: 'users' })
    userId: string;

    @Prop({})
    lessonId: string;

    @Prop({ type: EMessageTypes, enum: [EMessageTypes.bot, EMessageTypes.user], required: true })
    type: EMessageTypes;

    message: {
        id: { type: Number, required: true },
        content: {
            type: { type: String, required: true, enum: [EContentTypes.file, EContentTypes.photo, EContentTypes.text] },
            link: { type: String, default: null },
            text: { type: String, default: null },
            fileId: { type: String, default: null }
        }
    }
    @Prop({ default: Date.now() })
    createdAt: number;

    @Prop({ default: Date.now() })
    updatedAt: number;
}

export const MessageSchema = SchemaFactory.createForClass(Message);