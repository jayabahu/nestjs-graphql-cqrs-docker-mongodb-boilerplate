import { RegisterInput } from '../../types/user.inputs';

export class RegisterCommand {
  constructor(public readonly user: RegisterInput) {}
}
