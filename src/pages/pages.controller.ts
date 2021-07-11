import { Body, Controller, Get, HttpStatus, InternalServerErrorException, Next, Patch, Post, Query, Res, UsePipes } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { NextFunction, query, Response } from 'express';
import { ApiPaginatedResponse } from 'src/decorators/paginator';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { PagesDocument } from 'src/schemas/pages.schema';
import { EditPageDto, editPageSchema } from './dto/edit-page.dto';
import { PagesService } from './pages.service';

@Controller('pages')
@ApiTags('Pages')
export class PagesController {
    constructor(private readonly _ps: PagesService) {

    }

    @Post()
    @ApiCreatedResponse({ type: EditPageDto })
    @UsePipes(new JoiValidationPipe(editPageSchema))
    edit(
        @Res() res: Response,
        @Body() createPagesDto: EditPageDto,
        @Next() next: NextFunction,
    ): void {
        this._ps
            .create(createPagesDto)
            .then((page) => {
                res.status(HttpStatus.CREATED).send(page);
            })
            .catch((e) => next(new InternalServerErrorException(e)));
    }

    @Get()
    @ApiPaginatedResponse(EditPageDto)
    findAll(@Query() query: Partial<PagesDocument>, @Res() res: Response): void {
        this._ps.findAll(query)
            .then(result => res.status(HttpStatus.OK).send(result))
            .catch(e => {
                throw new InternalServerErrorException(e.message);
            })
    }



}
