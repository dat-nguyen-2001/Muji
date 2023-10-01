import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { createMongooseOptions } from './shared/helpers';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRootAsync({
      useFactory: () => createMongooseOptions('mongodb.uri'),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
