import { ApiProperty } from "@nestjs/swagger";
import * as Joi from '@hapi/joi';
import { ECourseStatus } from "src/courses/entities/course.entity";

export class EditPageDto {
    @ApiProperty({
        required: false,
        readOnly: true,
        type: String,
    })
    readonly id: string;

    @ApiProperty({
        required: true,
        type: Number,
        default: null
    })
    type: number;

    @ApiProperty({
        required: false,
        type: String,
        default: null
    })
    content: string;

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

export const editPageSchema = Joi.object({
    name: Joi.string().required(),
    context: Joi.string().allow(null, "").optional(),
    courseId: Joi.string().allow(null, "").optional(),
    free: Joi.boolean(),
    status: Joi.valid(ECourseStatus.DRAFT, ECourseStatus.PUBLISHED)
});