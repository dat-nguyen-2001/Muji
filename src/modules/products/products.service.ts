import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { IProduct } from './products.interface';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}
  async indexProducts(): Promise<number[]> {
    return this.productRepository.findAll();
  }

  async getProductByCode(productCode: string): Promise<IProduct> {
    return this.productRepository.findOne({ productCode });
  }
}
