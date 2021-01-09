import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiExtraModels, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiTooManyRequestsResponse, getSchemaPath } from '@nestjs/swagger';
import { UserDocument } from 'src/schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { PaginatedDto } from 'src/models/pagination.interface';
import { ApiPaginatedResponse } from 'src/decorators/paginator';

@ApiTags('users')
@Controller('users')
@ApiExtraModels(PaginatedDto)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  create(@Res() res: Response, @Body() user: CreateUserDto): void {
    this.usersService.create(user)
      .then(user => res.status(HttpStatus.CREATED).send({ user }))
      .catch(e => console.log(e));

  }

  @Get()
  @ApiPaginatedResponse(UserDto)
  findAll(): Promise<UserDocument[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserDto })
  findOne(@Param('id') id: string): Promise<UserDocument> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({ type: UserDto })
  update(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<UserDocument> {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  @ApiNoContentResponse()
  @ApiNotFoundResponse()
  @ApiInternalServerErrorResponse()
  remove(@Param('id') id: string, @Res() res: Response): void {
    this.usersService.remove(id)
      .then(() => res.status(HttpStatus.NO_CONTENT))
      .catch(e => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }))
  }
}
