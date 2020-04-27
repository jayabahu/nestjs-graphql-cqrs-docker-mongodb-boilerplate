import { CreateProductInput } from 'src/products/types/product.inputs';

export class CreateProductCommand {
  constructor(public readonly product: CreateProductInput) {}
}
