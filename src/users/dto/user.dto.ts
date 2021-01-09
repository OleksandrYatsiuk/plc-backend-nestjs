import { ApiProperty } from '@nestjs/swagger';

export enum EUserRole {
    Admin = 'Admin',
    Subscriber = 'Subscriber',
}

export class UserDto {
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
        title: 'This is user role',
        default: EUserRole.Subscriber,
        required: false,
        readOnly: true,
        type: String,
        enum: EUserRole,
        enumName: 'EUserRole'
    })
    readonly role?: EUserRole;


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
        title: 'This is user available courses',
        default: [],
        required: false,
        readOnly: true,
        type: [String]
    })
    readonly courses: string[];

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
