import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseConfigService } from './mongoose-config.service';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    UsersModule,
    CoursesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
    LessonsModule
  ],
  controllers: [AppController],
  providers: [AppService, MongooseConfigService],
})
export class AppModule { }
