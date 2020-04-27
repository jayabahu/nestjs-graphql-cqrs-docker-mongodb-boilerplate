import {
  Injectable,
  Logger,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { User, UserWithToken } from './types/user.types';
import { RegisterInput, LoginInput, GetUserInput } from './types/user.inputs';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async login({ email, password }: LoginInput): Promise<UserWithToken> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('Email or password incorrect');
    }

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw new BadRequestException('Email or password incorrect');
    }

    const token = this.jwtService.sign({ id: user.id });
    return { user, token };
  }

  async register(createUserInput: RegisterInput): Promise<UserWithToken> {
    const isExistingUser = await this.userModel.findOne({
      email: createUserInput.email,
    });
    if (isExistingUser) {
      throw new BadRequestException('Email is already in use');
    }

    try {
      const password = await bcryptjs.hash(createUserInput.password, 10);
      const user = await new this.userModel({
        ...createUserInput,
        password,
      }).save();
      const token = this.jwtService.sign({ id: user.id });
      return { user, token };
    } catch (error) {
      Logger.error('Create user error', error, 'User');
      throw new InternalServerErrorException();
    }
  }

  async find(user: GetUserInput): Promise<User> {
    try {
      return await this.userModel.findOne(user);
    } catch (error) {
      Logger.error('Find user error', error, 'User');
      throw new InternalServerErrorException();
    }
  }
}
