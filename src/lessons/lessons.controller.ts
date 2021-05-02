import { Body, Controller, Delete, Get, HttpStatus, InternalServerErrorException, Next, NotFoundException, Param, Post, Put, Query, Res, UsePipes } from '@nestjs/common';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { NextFunction, Response } from 'express';
import { ApiPaginatedResponse } from 'src/decorators/paginator';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { CreateLessonDto, createLessonSchema } from './dto/create-lesson';
import { IQuerySearchLessons } from './entities/lessons.entity';
import { LessonsService } from './lessons.service';

@Controller('lessons')
@ApiTags('Lessons')
export class LessonsController {
    constructor(private readonly _ls: LessonsService) { }

    @Post()
    @ApiCreatedResponse({ type: CreateLessonDto })
    @UsePipes(new JoiValidationPipe(createLessonSchema))
    create(
        @Res() res: Response,
        @Body() createCourseDto: CreateLessonDto,
        @Next() next: NextFunction,
    ): void {
        this._ls
            .create(createCourseDto)
            .then((course) => {
                res.status(HttpStatus.CREATED).send(course);
            })
            .catch((e) => next(new InternalServerErrorException(e)));
    }

    @Get()
    @ApiPaginatedResponse(CreateLessonDto)
    @ApiQuery({ name: 'page', type: Number, required: false })
    @ApiQuery({ name: 'limit', type: Number, required: false })

    findAll(@Query() query: IQuerySearchLessons, @Param() params, @Res() res: Response): void {
        this._ls.findAll(query)
            .then(result => res.status(HttpStatus.OK).send(result))
            .catch(e => {
                throw new InternalServerErrorException(e.message);
            })
    }


    @Get(':id')
    @ApiOkResponse({ type: CreateLessonDto })
    findOne(
        @Param('id') id: string,
        @Res() res: Response,
        @Next() next: NextFunction,
    ): void {
        this._ls
            .findOne(id)
            .then((course) => res.status(HttpStatus.OK).send(course))
            .catch((e) => next(new InternalServerErrorException(e)));
    }

    @Put(':id')
    @ApiOkResponse({ type: CreateLessonDto })
    update(
        @Param('id') id: string,
        @Res() res: Response,
        @Body(new JoiValidationPipe(createLessonSchema))
        data: CreateLessonDto,
        @Next() next: NextFunction,
    ): void {
        this._ls
            .update(id, data)
            .then((lesson) => {
                if (lesson) {
                    res.status(HttpStatus.OK).send(lesson);
                } else {
                    throw new NotFoundException({ result: 'Lesson was not found!' });
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
        this._ls
            .remove(id)
            .then(() => res.status(HttpStatus.NO_CONTENT).send(null))
            .catch((e) => next(new InternalServerErrorException(e.message)));
    }
}
