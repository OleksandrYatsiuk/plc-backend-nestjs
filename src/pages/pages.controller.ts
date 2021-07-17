import { Body, Controller, Get, HttpStatus, InternalServerErrorException, Next, Patch, Post, Put, Query, Res, UsePipes } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { NextFunction, Response } from 'express';
import { ApiPaginatedResponse } from 'src/decorators/paginator';
import { EditPageDto } from './dto/edit-page.dto';
import { IQuerySearchPages } from './entities/page.entity';
import { PagesService } from './pages.service';

@Controller('pages')
@ApiTags('Pages')
export class PagesController {
    constructor(private readonly _ps: PagesService) {

    }

    @Post()
    @ApiCreatedResponse({ type: EditPageDto })
    create(
        @Res() res: Response,
        @Body() createPagesDto: EditPageDto,
        @Next() next: NextFunction,
    ): void {
        this._ps
            .create(createPagesDto)
            .then((page) => res.status(HttpStatus.CREATED).send(page))
            .catch((e) => next(new InternalServerErrorException(e)));
    }
    @Put()
    @ApiOkResponse({ type: EditPageDto })
    edit(
        @Res() res: Response,
        @Body() createPagesDto: EditPageDto,
        @Next() next: NextFunction,
    ): void {
        this._ps
            .edit(createPagesDto)
            .then((page) => {
                res.status(HttpStatus.OK).send(page);
            })
            .catch((e) => next(new InternalServerErrorException(e)));
    }

    @Get()
    @ApiPaginatedResponse(EditPageDto)
    @ApiQuery({ name: 'page', type: String, required: false })
    @ApiQuery({ name: 'limit', type: String, required: false })
    @ApiQuery({ name: 'type', type: String, required: false })
    findAll(@Query() query: IQuerySearchPages, @Res() res: Response): void {
        this._ps.findAll(query)
            .then(result => res.status(HttpStatus.OK).send(result))
            .catch(e => {
                throw new InternalServerErrorException(e?.message || e);
            })
    }



}
