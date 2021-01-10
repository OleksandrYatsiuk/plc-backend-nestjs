import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { PaginatedDto } from 'src/models/pagination.interface';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CheckCodeDto } from './dto/check-code.dto';
import { CreateUserDto, EUserRole } from './dto/create-user.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private db: Model<UserDocument>) { }

  create(data: CreateUserDto) {
    const user = new this.db(data);
    return user.save();
  }

  registerAdmin(data: RegisterDto): Promise<UserDocument> {
    const passwordHash = bcrypt.hashSync(data.password, 10);
    const user: UserDocument = new this.db({ ...data, role: EUserRole.Admin, passwordHash });
    return user.save();
  }

  async loginAdmin(data: RegisterDto): Promise<UserDocument> {
    const user = await this.db.findOne({ username: data.username });
    if (user && bcrypt.compareSync(data.password, user.passwordHash)) {
      return this.db.findByIdAndUpdate(user._id,
        { $set: { accessToken: bcrypt.hashSync(data.password, 10) } },
        { new: true });
    } else {
      throw new BadRequestException();
    }
  }


  async findAll(page: number, limit: number): Promise<PaginatedDto<User>> {
    page = page - 1;
    const count = await this.db.countDocuments();
    const users = await this.db.find().sort({ updatedAt: 1 }).limit(limit).skip(limit * page);
    return {
      total: count, limit, page: page + 1,
      result: users
    };
  }

  findOne(id: string): Promise<UserDocument> {
    return this.db.findById(id).exec()
      .then(user => {
        if (user) {
          return user;
        } else {
          throw new NotFoundException('User was not found');
        }
      })
  }

  update(id: string, data: UpdateUserDto): Promise<UserDocument> {
    return this.db.findByIdAndUpdate(id, { $set: { data } }, { new: true }).exec();
  }

  remove(id: string): Promise<UserDocument> {
    return this.db.findByIdAndDelete(id).exec();
  }

  async genCode(data: CreateUserDto): Promise<UserDocument> {
    const user = await this.db.findOne(data);
    if (user) {
      const code = this.getRandomInt(1000, 9999);
      setTimeout(() => {
        this.db.findByIdAndUpdate(user._id, { $set: { code: null, updatedAt: Date.now() } }).exec();
      }, 30 * 60 * 1000);
      return this.db.findByIdAndUpdate(user._id, { $set: { code, updatedAt: Date.now() } }, { new: true }).exec();
    }
  }

  async checkCode(data: CheckCodeDto): Promise<UserDocument> {
    const user = await this.db.findOne(data);
    if (user && user.code === data.code) {
      return user;
    } else {
      throw new BadRequestException('Код не валідний!');
    }
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private parseModel(user: UserDocument): User {
    return {
      id: user._id,
      updatedAt: 1610276245305,
      createdAt: 1610276245305,
      accessToken: null,
      passwordHash: '$2b$10$NJjfqVNNGLKdWDCVaem.4.lLKwyYOF1.SbaaoG2crLwWKcX/0qD12',
      haveMessages: false,
      courses: [],
      role: 'admin',
      code: null,
      status: 0,
      chat_id: null,
      phone: null,
      email: null,
      lastName: null,
      firstName: null,
      username: 'techadmin3',
    }
  }

}
