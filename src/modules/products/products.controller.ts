import { IProduct } from './products.interface';
import { ProductsService } from './products.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async indexProducts(): Promise<any[]> {
    return this.productsService.indexProducts();
  }

  @Get(':productCode')
  async getProductByCode(
    @Param('productCode') productCode: string,
  ): Promise<IProduct> {
    return this.productsService.getProductByCode(productCode);
  }
}
