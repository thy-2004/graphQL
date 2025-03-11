import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
