import { Resolver, Query } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import ProductModel from './product.model';

@Resolver()
export class ProductsResolver {
  constructor(private productService: ProductsService) {}
  @Query(() => [ProductModel])
  async getProduct() {
    return this.productService.getAll();
  }

  @Query(() => ProductModel)
  async getoneProduct() {
    return this.productService.getOne();
  }
}
