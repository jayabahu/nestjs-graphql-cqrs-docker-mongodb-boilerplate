import { RegisterCommand } from '../impl/register.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../../users.repository';

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
  constructor(private repository: UsersRepository) {}

  async execute(command: RegisterCommand) {
    const { user } = command;
    return this.repository.register(user);
  }
}
