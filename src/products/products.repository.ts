import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductInput } from './types/product.inputs';
import { Product } from './types/product.types';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  create(createProductInput: CreateProductInput): Promise<Product> {
    Logger.log('Create product started.', 'Products');
    const createdProduct = new this.productModel(createProductInput);
    return createdProduct.save();
  }

  findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
