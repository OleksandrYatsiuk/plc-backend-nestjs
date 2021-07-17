import { ApiProperty } from "@nestjs/swagger";
import * as Joi from '@hapi/joi';

export class EditPageDto {
    @ApiProperty({
        required: false,
        readOnly: true,
        type: String,
    })
    readonly _id: string;

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
        required: true,
        type: String,
        default: null
    })
    name: string;

    @ApiProperty({
        required: false,
        type: String,
        default: null
    })
    path: string;

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
});