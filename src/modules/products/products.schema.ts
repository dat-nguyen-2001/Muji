import { CurrencyUnits, ProductSpecs } from './products.interface';
import * as mongoose from 'mongoose';

export class ProductDocument {
  id: string;
  name: string;
  description: string;
  price: number;
  productCode: number;
  capacity: {
    amount: number;
    unit: { type: string; enum: CurrencyUnits };
  };
  displayImg: string;
  specs: ProductSpecs[];
}

export const ProductSchema = new mongoose.Schema(ProductDocument);
