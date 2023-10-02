import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}
  async indexProducts(): Promise<number[]> {
    return this.productRepository.findAll();
  }
}
