import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

import { UsersResolver } from './users.resolver';
import { UserSchema } from './schemas/user.schema';

import { JWT_SECRET } from 'src/config';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    UsersService,
    UsersRepository,
    UsersResolver,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  exports: [UsersService],
})
export class UsersModule {}
