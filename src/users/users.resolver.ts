import { Resolver, Query } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { UseGuards, Injectable } from '@nestjs/common';

import { GqlAuthGuard } from 'src/auth/guards/graphql-auth.guard';
import { CurrentUser } from 'src/decorators/user.decorator';

import { User } from './types/user.types';

import { GetUserQuery } from './queries/impl/get-user.query';

@Resolver('Users')
@Injectable()
export class UsersResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  userCurrent(@CurrentUser() user: User) {
    return this.queryBus.execute(new GetUserQuery({ id: user.id }));
  }
}
