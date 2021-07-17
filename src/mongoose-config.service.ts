import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
       uri: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@plc.eqrk2.mongodb.net/${process.env.DATABASE_NAME}`,
      // uri: `mongodb://127.0.0.1:27017/plc`,
      useFindAndModify: false,
    };
  }
}
