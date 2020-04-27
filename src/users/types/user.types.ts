import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class User extends Document {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class UserWithToken {
  @Field()
  user: User;

  @Field()
  token: string;
}
