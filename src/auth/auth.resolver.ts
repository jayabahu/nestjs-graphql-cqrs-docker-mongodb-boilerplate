import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';

import { ResGql } from 'src/decorators/user.decorator';

import { UsersService } from 'src/users/users.service';

import { UserWithToken } from 'src/users/types/user.types';
import { LoginInput, RegisterInput } from 'src/users/types/user.inputs';

@Resolver('Auth')
@Injectable()
export class AuthResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserWithToken)
  async login(@Args('input') input: LoginInput, @ResGql() res: Response) {
    const results = await this.usersService.login(input);
    if (results) {
      const { token } = results;
      res.cookie('token', token, { httpOnly: true });
    }
    return results;
  }

  @Mutation(() => UserWithToken)
  async register(@Args('input') input: RegisterInput, @ResGql() res: Response) {
    const results = await this.usersService.register(input);
    if (results) {
      const { token } = results;
      res.cookie('token', token, { httpOnly: true });
    }
    return results;
  }
}
