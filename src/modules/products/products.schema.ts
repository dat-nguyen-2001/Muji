import {
  CountriesOfOrigin,
  CurrencyUnits,
  ProductSpecs,
} from './products.interface';
import * as mongoose from 'mongoose';

export class ProductDocument {
  id: string;
  name: string;
  description: string;
  price: number;
  productCode: string;
  capacity: {
    amount: number;
    unit: { type: string; enum: CurrencyUnits };
  };
  displayImgs: string[];
  specs: ProductSpecs[];
  note: string;
  origin: { type: string; enum: CountriesOfOrigin };
  material: string;
}

export const ProductSchema = new mongoose.Schema(ProductDocument);
