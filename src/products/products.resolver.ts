import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductModel, CreateProductInput, UpdateProductInput } from './product.model';
import { ProductsService } from './products.service';

@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [ProductModel], { name: 'products' })
  async findAll() {
    return this.productsService.findAll();
  }
@Query(() => ProductModel, { name: 'getoneProduct' }) 
async findById(@Args('id', { type: () => ID }) id: number) {
  return this.productsService.findById(id);
}

  

  @Mutation(() => ProductModel)
  async createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.create(data);
  }

  @Mutation(() => ProductModel)
  async updateProduct(
    @Args('id', { type: () => ID }) id: number, // Đổi string → number
    @Args('data') data: UpdateProductInput
  ) {
    return this.productsService.update(id, data);
  }
  
  

  @Mutation(() => Boolean)
  async deleteProduct(@Args('id', { type: () => ID }) id: number) {
    return this.productsService.delete(id);
  }
}
