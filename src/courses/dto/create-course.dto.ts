import { ApiProperty } from "@nestjs/swagger";
import { ECourseStatus } from "../entities/course.entity";
import * as Joi from '@hapi/joi';
import { allow } from "@hapi/joi";

export class CreateCourseDto {
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
        default: 'description'
    })
    description: string;

    @ApiProperty({
        required: false,
        type: Number,
        enum: ECourseStatus,
        default: ECourseStatus.DRAFT
    })
    status: ECourseStatus;

    @ApiProperty({
        required: false,
        type: Number
    })
    price: number;

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

export const createCourseSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null, "").optional(),
    price: Joi.number().optional().min(0),
    status: Joi.valid(ECourseStatus.DRAFT, ECourseStatus.PUBLISHED)
});