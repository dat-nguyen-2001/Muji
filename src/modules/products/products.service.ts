import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  async indexProducts(): Promise<number[]> {
    return [1, 2, 3];
  }
}
