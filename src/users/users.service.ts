import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getAllUser(): Promise<User[]> {
    return this.userModel.find({});
  }

  createUser(userDTO: UserDTO): Promise<User> {
    const newUser = new this.userModel(userDTO);
    return newUser.save();
  }
}
