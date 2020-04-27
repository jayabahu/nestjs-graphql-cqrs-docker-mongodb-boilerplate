import { GetUserInput } from 'src/users/types/user.inputs';

export class GetUserQuery {
  constructor(public readonly user: GetUserInput) {}
}
