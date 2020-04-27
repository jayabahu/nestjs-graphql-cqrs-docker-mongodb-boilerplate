import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @MaxLength(30)
  username: string;

  @Field()
  @MaxLength(30)
  email: string;

  @Field()
  @MaxLength(30)
  password: string;
}

@InputType()
export class LoginInput {
  @Field()
  @MaxLength(30)
  email: string;

  @Field()
  @MaxLength(30)
  password: string;
}

export class GetUserInput {
  email?: string;
  username?: string;
  id?: string;
}
