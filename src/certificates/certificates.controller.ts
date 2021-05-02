import { Body, Controller, Delete, Get, HttpStatus, InternalServerErrorException, Next, NotFoundException, Param, Post, Put, Query, Res, UsePipes } from '@nestjs/common';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { NextFunction, Response } from 'express';
import { ApiPaginatedResponse } from 'src/decorators/paginator';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { CertificatesService } from './certificates.service';
import { CertificateDto, createCertificateSchema } from './dto/certificate.dto';


@ApiTags('Certificate')
@Controller('certificates')
export class CertificatesController {
    constructor(private readonly _cs: CertificatesService) { }


    @Post()
    @ApiCreatedResponse({ type: CertificateDto })
    @UsePipes(new JoiValidationPipe(createCertificateSchema))
    create(@Res() res: Response, @Body() data: CertificateDto, @Next() next: NextFunction,
    ): void {
        this._cs.create(data)
            .then(certificate => res.status(HttpStatus.CREATED).send(certificate))
            .catch(e => next(new InternalServerErrorException(e)));
    }



    @Get()
    @ApiPaginatedResponse(CertificateDto)
    @ApiQuery({ name: 'page', type: Number, required: false, example: 1 })
    @ApiQuery({ name: 'limit', type: Number, required: false, example: 20 })
    @ApiQuery({ name: 'userId', type: String, required: false })
    @ApiQuery({ name: 'courseId', type: String, required: false })

    findAll(@Query() query, @Param() params, @Res() res: Response): void {
        this._cs.findAll({ ...query, limit: +query.limit || 20, page: +query.page || 1 })
            .then(result => res.status(HttpStatus.OK).send(result))
            .catch(e => { throw new InternalServerErrorException(e.message) })
    }

    @Delete(':id')
    @ApiNoContentResponse()

    remove(@Param('id') id: string, @Res() res: Response, @Next() next: NextFunction): void {
        this._cs.remove(id)
            .then(() => res.status(HttpStatus.NO_CONTENT).send(null))
            .catch((e) => next(new InternalServerErrorException(e.message)));
    }

    @Put(':id')
    @ApiOkResponse({ type: CertificateDto })
    refresh(
        @Param('id') id: string,
        @Res() res: Response,
        @Body() updateCourseDto: CertificateDto,
        @Next() next: NextFunction,
    ): void {
        this._cs.refreshLink(id, updateCourseDto.fileId)
            .then((course) => {
                if (course) {
                    res.status(HttpStatus.OK).send(course);
                } else {
                    throw new NotFoundException({ result: 'Certificate was not found!' });
                }
            })
            .catch((e) => next(new InternalServerErrorException(e.message)));
    }
}

