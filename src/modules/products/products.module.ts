import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dbmodel } from '../../shared/enums';
import { ProductSchema } from './products.schema';
import { ProductRepository } from './products.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Dbmodel.Products,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository],
  exports: [ProductsService],
})
export class ProductsModule {}
