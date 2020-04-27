import { GetUserQuery } from '../impl/get-user.query';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../../users.repository';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private repository: UsersRepository) {}

  async execute(query: GetUserQuery) {
    const { user } = query;
    return this.repository.find(user);
  }
}
