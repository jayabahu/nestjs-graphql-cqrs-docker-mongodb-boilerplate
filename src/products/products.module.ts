import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsResolver } from './products.resolver';
import { ProductSchema } from './schema/product.schema';
import { ProductsRepository } from './products.repository';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  providers: [
    ProductsResolver,
    ProductsRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class ProductModule {}
