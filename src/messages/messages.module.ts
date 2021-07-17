import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema, Message } from 'src/schemas/messages.schema';

@Module({
  controllers: [MessagesController],
  imports: [
    MongooseModule.forFeature([
      { name: Message.name, schema: MessageSchema }
    ])],
  providers: [MessagesService]
})
export class MessagesModule { }
