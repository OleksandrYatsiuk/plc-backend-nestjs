import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {

    @ApiProperty({
        default: 'techadmin',
        required: true,
        type: String
    })
    username?: string;

    @ApiProperty({
        default: 'Test123!',
        required: true,
        type: String
    })
    password?: string;
}
