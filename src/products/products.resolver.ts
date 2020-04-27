import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from 'src/auth/guards/graphql-auth.guard';

import { Product } from './types/product.types';

import { CreateProductInput } from './types/product.inputs';

import { CreateProductCommand } from './commands/impl/create-product.command';
import { GetProductsQuery } from './queries/impl/get-products.query';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [Product])
  @UseGuards(GqlAuthGuard)
  async products(): Promise<Product[]> {
    return this.queryBus.execute(new GetProductsQuery());
  }

  @Mutation(() => Product)
  @UseGuards(GqlAuthGuard)
  async productCreate(
    @Args('input') product: CreateProductInput,
  ): Promise<Product> {
    return this.commandBus.execute(new CreateProductCommand(product));
  }
}
