import { Controller, Get, Render, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get('')
  public async index() {
    const products = await this.productService.getAll();
    return { products };
  }
  @Post('create')
  public async create() {
    return { message: 'Tạo mới thành công!!!' };
  }
}
