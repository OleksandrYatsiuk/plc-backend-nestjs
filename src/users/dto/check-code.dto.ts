import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class CheckCodeDto extends CreateUserDto {

    @ApiProperty({
        default: "+380999999999",
        required: true,
        type: String
    })
    phone: string;

    @ApiProperty({
        default: 1234,
        required: true,
        type: Number
    })
    code: number;
}
