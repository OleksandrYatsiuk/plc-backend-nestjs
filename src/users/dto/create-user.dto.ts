import { ApiProperty } from '@nestjs/swagger';

export enum EUserRole {
    Admin = 'admin',
    Subscriber = 'subscriber',
}

export class CreateUserDto {
   
    @ApiProperty({
        title: 'This is user phone number',
        default: "+380999999999",
        required: true,
        type: String
    })
    phone?: string;
}
