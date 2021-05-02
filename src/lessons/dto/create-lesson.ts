import { ApiProperty } from "@nestjs/swagger";
import * as Joi from '@hapi/joi';
import { ECourseStatus } from "src/courses/entities/course.entity";

export class CreateLessonDto {
    @ApiProperty({
        required: false,
        readOnly: true,
        type: String,
    })
    readonly id: string;

    @ApiProperty({
        required: true,
        type: String,
        default: 'name'
    })
    name: string;

    @ApiProperty({
        required: false,
        type: String,
        default: null
    })
    context: string;

    @ApiProperty({
        required: false,
        type: Number,
        enum: ECourseStatus,
        default: ECourseStatus.DRAFT
    })
    status: ECourseStatus;

    @ApiProperty({
        required: false,
        type: Boolean,
        default: false
    })
    free: boolean;

    @ApiProperty({
        type: Number,
        required: false,
        readOnly: true,
        default: Date.now()
    })
    readonly createdAt: number;
    @ApiProperty({
        type: Number,
        required: false,
        readOnly: true,
        default: Date.now()
    })
    readonly updatedAt: number;
}

export const createLessonSchema = Joi.object({
    name: Joi.string().required(),
    context: Joi.string().allow(null, "").optional(),
    courseId: Joi.string().allow(null, "").optional(),
    free: Joi.boolean(),
    status: Joi.valid(ECourseStatus.DRAFT, ECourseStatus.PUBLISHED)
});