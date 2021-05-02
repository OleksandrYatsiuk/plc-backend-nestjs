import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { EStudyProgress } from 'src/certificates/entities/certificates.interface';


export type CertificateDocument = Certificate & mongoose.Document;

@Schema({ versionKey: false })
export class Certificate {

    @Prop()
    readonly id: mongoose.Types.ObjectId;

    @Prop({ required: true, ref: 'users' })
    userId: mongoose.Types.ObjectId;

    @Prop({ required: true, ref: 'courses' })
    courseId: mongoose.Types.ObjectId;

    @Prop({
        default: EStudyProgress.NOT_STARTED,
        enum: [EStudyProgress.NOT_STARTED, EStudyProgress.STARTED, EStudyProgress.IN_PROGRESS, EStudyProgress.COMPLETED]
    })
    progress: number;

    @Prop({ required: true })
    fileId: string;

    @Prop({ required: true })
    fileLink: string;

    @Prop({ default: Date.now() })
    createdAt: number;

    @Prop({ default: Date.now() })
    updatedAt: number;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);