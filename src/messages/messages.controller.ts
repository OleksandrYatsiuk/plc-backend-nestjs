import { Controller, Get, Post, Body, Put, Param, Delete, InternalServerErrorException, Res, HttpStatus } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService
  ) { }

  @Post()
  create(@Res() res: Response, @Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto)
      .then(() => res.status(HttpStatus.OK).send(true))
      .catch(e => new InternalServerErrorException(e))
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.messagesService.findOne(+id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
  //   return this.messagesService.update(+id, updateMessageDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
