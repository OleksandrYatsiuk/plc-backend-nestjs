import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus, UsePipes, NotFoundException, Next, Query, HttpException, InternalServerErrorException } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiCreatedResponse, ApiExtraModels, ApiInternalServerErrorResponse,
  ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags
} from '@nestjs/swagger';
import { UserDocument } from 'src/schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { PaginatedDto } from 'src/models/pagination.interface';
import { ApiPaginatedResponse } from 'src/decorators/paginator';
import { RegisterDto } from './dto/register.dto';
import { CheckCodeDto } from './dto/check-code.dto';

@ApiTags('Users')
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
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  findAll(@Query() query, @Param() params, @Res() res: Response): void {
    this.usersService.findAll(+query?.page || 1, +query?.limit || 10)
      .then(result => res.status(HttpStatus.OK).send(result))
      .catch(e => {
        throw new InternalServerErrorException(e.message);
      })
  }

  @Get(':id')
  @ApiOkResponse({ type: UserDto })
  findOne(@Param('id') id: string, @Res() res: Response, @Next() next: NextFunction): void {
    this.usersService.findOne(id)
      .then(user => res.status(HttpStatus.OK).send(user))
      .catch(e => next(new NotFoundException(e.message)));
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
      .then(() => res.status(HttpStatus.NO_CONTENT).send())
      .catch(e => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }))
  }

  @Post('register')
  @ApiCreatedResponse({ type: UserDto })
  @ApiInternalServerErrorResponse()
  registerAdmin(@Body() user: RegisterDto, @Res() res: Response): void {
    this.usersService.registerAdmin(user)
      .then((user) => res.status(HttpStatus.CREATED).send(user))
      .catch(e => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }))
  }

  @Post('login')
  @ApiOkResponse({ type: UserDto })
  loginAdmin(@Body() user: RegisterDto, @Res() res: Response): void {
    this.usersService.loginAdmin(user)
      .then(user => res.status(HttpStatus.OK).send(user))
      .catch(e => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }))
  }

  @Post('generate-code')
  @ApiOkResponse({ type: UserDto })
  generateCode(@Body() data: CreateUserDto, @Res() res: Response): void {
    this.usersService.genCode(data)
      .then(user => res.status(HttpStatus.OK).send(user))
      .catch(e => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }))
  }
  @Post('check-code')
  @ApiOkResponse({ type: UserDto })
  checkCode(@Body() data: CheckCodeDto, @Res() res: Response): void {
    this.usersService.checkCode(data)
      .then(user => res.status(HttpStatus.OK).send(user))
      .catch(e => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }))
  }

}