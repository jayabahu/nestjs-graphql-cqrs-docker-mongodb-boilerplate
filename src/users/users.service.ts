import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetUserQuery } from './queries/impl/get-user.query';
import { LoginCommand } from './commands/impl/login.command';
import { LoginInput, RegisterInput } from './types/user.inputs';
import { RegisterCommand } from './commands/impl/register.command';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.queryBus.execute(new GetUserQuery({ username }));
  }

  async findOneById(id: string): Promise<User | undefined> {
    return this.queryBus.execute(new GetUserQuery({ id }));
  }

  async login(input: LoginInput) {
    return await this.commandBus.execute(new LoginCommand(input));
  }

  async register(input: RegisterInput) {
    return await this.commandBus.execute(new RegisterCommand(input));
  }
}
