import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { Page, PagesSchema } from 'src/schemas/pages.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: Page.name, schema: PagesSchema }])],
    providers: [PagesService],
    controllers: [PagesController],
})
export class PagesModule {}
