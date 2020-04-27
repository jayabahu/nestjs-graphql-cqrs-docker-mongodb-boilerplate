import { LoginCommand } from '../impl/login.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../../users.repository';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(private repository: UsersRepository) {}

  async execute(command: LoginCommand) {
    const { user } = command;
    return this.repository.login(user);
  }
}
