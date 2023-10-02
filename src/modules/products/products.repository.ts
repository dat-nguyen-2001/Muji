import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dbmodel } from '../../shared/enums';
import { ProductDocument } from './products.schema';

@Injectable()
export class ProductRepository implements OnApplicationBootstrap {
  constructor(
    @InjectModel(Dbmodel.Products) private model: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<any[]> {
    return this.model.find().exec();
  }

  async onApplicationBootstrap(): Promise<void> {
    //check if collection already exists
    const result = this.model.db.db.listCollections({
      name: this.model.collection.collectionName,
    });
    if (!result) {
      console.log(this.model.db);
      console.log(this.model.db.db);
      await this.model.createCollection();
    }
  }
}
