import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        title: 'This is user name',
        required: false,
        default: null,
        type: String
    })
    firstName: string;

    @ApiProperty({
        title: 'This is user phone number',
        default: null,
        required: false,
        type: String
    })
    lastName?: string;

    @ApiProperty({
        title: 'This is user first name',
        default: 'email@email.co',
        required: false,
        type: String
    })
    email: string;

    @ApiProperty({
        title: 'This is user phone number',
        default: 380999999999,
        required: true,
        type: String
    })
    phone?: string;

    @ApiProperty({
        title: 'This is user chat ID number',
        default: 0,
        required: false,
        type: Number
    })
    chat_id?: number;

    @ApiProperty({
        title: 'This is user status',
        default: 0,
        required: false,
        readOnly: true,
        type: Number
    })
    readonly status?: number;


    @ApiProperty({
        title: 'This is user code',
        default: null,
        readOnly: true,
        required: false,
        type: Number,
    })
    readonly code?: number;

    @ApiProperty({
        default: null,
        type: Boolean,
        readOnly: true,
        required: false,
    })
    readonly haveMessages: boolean;

    @ApiProperty({
        default: null,
        type: String,
        readOnly: true,
        required: false,
    })
    readonly passwordHash: string

    @ApiProperty({
        default: null,
        type: String,
        readOnly: true,
        required: false,
    })
    readonly accessToken: string

    @ApiProperty({
        default: Date.now(),
        type: String,
        readOnly: true,
        required: false,
    })
    readonly createdAt: number

    @ApiProperty({
        default: Date.now(),
        type: String,
        readOnly: true,
        required: false,
    })
    readonly updatedAt: number
}
