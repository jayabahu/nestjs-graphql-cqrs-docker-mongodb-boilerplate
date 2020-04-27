import { CreateProductCommand } from '../impl/create-product.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProductsRepository } from 'src/products/products.repository';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand> {
  constructor(private repository: ProductsRepository) {}

  async execute(command: CreateProductCommand) {
    const { product } = command;
    return this.repository.create(product);
  }
}
