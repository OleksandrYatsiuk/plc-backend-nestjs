import { ApiProperty } from "@nestjs/swagger";
import { EMessageTypes } from "../entities/message.entity";

export class CreateMessageDto {
    @ApiProperty({
        required: false,
        readOnly: true,
        type: String,
    })
    readonly _id: string;

    @ApiProperty({
        required: true,
        type: String,
    })
    userId: string;

    @ApiProperty({
        required: true,
        type: String,
    })
    lessonId: string;

    @ApiProperty({
        required: true,
        enum: [EMessageTypes.user, EMessageTypes.bot],
        default: EMessageTypes.bot,
        type: EMessageTypes,
    })
    type: string;

    @ApiProperty({ required: true })
    message: any;
}
