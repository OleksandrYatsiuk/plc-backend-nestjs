import {
  Controller, Get, Post, Body, Put, Param,
  Delete, Next, InternalServerErrorException,
  Res, HttpStatus, UsePipes, NotFoundException, Query
} from '@nestjs/common';
import {
  ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiQuery, ApiTags,
} from '@nestjs/swagger';
import { NextFunction, Response } from 'express';
import { ApiPaginatedResponse } from 'src/decorators/paginator';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { CoursesService } from './courses.service';
import { CreateCourseDto, createCourseSchema } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@ApiTags('Courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly _cs: CoursesService) { }

  @Post()
  @ApiCreatedResponse({ type: CreateCourseDto })
  @UsePipes(new JoiValidationPipe(createCourseSchema))
  create(
    @Res() res: Response,
    @Body() createCourseDto: CreateCourseDto,
    @Next() next: NextFunction,
  ): void {
    this._cs
      .create(createCourseDto)
      .then((course) => {
        res.status(HttpStatus.CREATED).send(course);
      })
      .catch((e) => next(new InternalServerErrorException(e)));
  }

  @Get()
  @ApiPaginatedResponse(CreateCourseDto)
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  findAll(@Query() query, @Param() params, @Res() res: Response): void {
    this._cs.findAll(query)
      .then(result => res.status(HttpStatus.OK).send(result))
      .catch(e => {
        throw new InternalServerErrorException(e.message);
      })
  }

  @Get(':id')
  @ApiOkResponse({ type: CreateCourseDto })
  findOne(
    @Param('id') id: string,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): void {
    this._cs
      .findOne(id)
      .then((course) => res.status(HttpStatus.OK).send(course))
      .catch((e) => next(new InternalServerErrorException(e)));
  }

  @Put(':id')
  @ApiOkResponse({ type: CreateCourseDto })
  update(
    @Param('id') id: string,
    @Res() res: Response,
    @Body(new JoiValidationPipe(createCourseSchema))
    updateCourseDto: UpdateCourseDto,
    @Next() next: NextFunction,
  ): void {
    this._cs
      .update(id, updateCourseDto)
      .then((course) => {
        if (course) {
          res.status(HttpStatus.OK).send(course);
        } else {
          throw new NotFoundException({ result: 'Course was not found!' });
        }
      })
      .catch((e) => next(new InternalServerErrorException(e.message)));
  }

  @Delete(':id')
  @ApiNoContentResponse()
  remove(
    @Param('id') id: string,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): void {
    this._cs
      .remove(id)
      .then(() => res.status(HttpStatus.NO_CONTENT).send(null))
      .catch((e) => next(new InternalServerErrorException(e.message)));
  }
}
