import { LoginInput } from '../../types/user.inputs';

export class LoginCommand {
  constructor(public readonly user: LoginInput) {}
}
