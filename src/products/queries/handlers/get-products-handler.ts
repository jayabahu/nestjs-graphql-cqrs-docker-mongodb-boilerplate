import { GetProductsQuery } from '../impl/get-products.query';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ProductsRepository } from 'src/products/products.repository';

@QueryHandler(GetProductsQuery)
export class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
  constructor(private repository: ProductsRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
