import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private db: Model<UserDocument>) { }

  create(data: CreateUserDto) {
    const user = new this.db(data);
    return user.save();
  }

  findAll(): Promise<UserDocument[]> {
    return this.db.find().exec();
  }

  findOne(id: string): Promise<UserDocument> {
    return this.db.findById(id).exec();
  }

  update(id: string, data: UpdateUserDto): Promise<UserDocument> {
    return this.db.findByIdAndUpdate(id, { $set: { data } }, { new: true }).exec();
  }

  remove(id: string): Promise<UserDocument> {
    return this.db.findByIdAndDelete(id).exec();
  }
}
