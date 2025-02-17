import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get('')
  @Render('products/index')
  public async index() {
    // await this.productService.create();
    const products = await this.productService.getAll();
    return { products };
  }
}
