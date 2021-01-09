import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export enum EUserRole {
    Admin = 'Admin',
    Subscriber = 'Subscriber',
}

export class CreateUserDto {
   
    @ApiProperty({
        title: 'This is user phone number',
        default: 380999999999,
        required: true,
        type: String
    })
    phone?: string;
}
