import { ApiProperty } from "@nestjs/swagger";
import * as Joi from '@hapi/joi';
import { EStudyProgress } from "../entities/certificates.interface";

export class CertificateDto {
    @ApiProperty({ required: false, readOnly: true, type: String })
    readonly id: string;
    @ApiProperty({ required: true, type: String })
    userId: string;
    @ApiProperty({ required: true, type: String })
    courseId: string;

    @ApiProperty({
        required: true, type: Number, enum: EStudyProgress,
        default: EStudyProgress.NOT_STARTED
    })
    progress: EStudyProgress;

    @ApiProperty({ required: true, type: String })
    fileId: string;

    @ApiProperty({ required: true, type: String })
    fileLink: string|URL;

    @ApiProperty({ type: Number, required: false, readOnly: true, default: Date.now() })
    readonly createdAt: number;
    @ApiProperty({ type: Number, required: false, readOnly: true, default: Date.now() })
    readonly updatedAt: number;
}

export const createCertificateSchema = Joi.object({
    userId: Joi.string().required(),
    courseId: Joi.string().required(),
    progress: Joi.valid(EStudyProgress.NOT_STARTED, EStudyProgress.STARTED,
        EStudyProgress.COMPLETED, EStudyProgress.IN_PROGRESS),
    fileId: Joi.string().allow(null, "").optional(),
    fileLink: Joi.string().allow(null, "").optional(),
});