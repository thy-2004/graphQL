import { 
  Controller, Get, Put, Post, Body, Param, BadRequestException, ParseIntPipe 
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductInput } from './dto/update-product.input';
import { CreateProductInput } from './dto/create-product.input';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  // Lấy danh sách sản phẩm
  @Get()
  public async index() {
    return { products: await this.productService.findAll() };
  }

  // Cập nhật sản phẩm
  @Put(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdateProductInput
  ) {
    return await this.productService.update(id, body);
  }

  // Tạo sản phẩm mới
  @Post()
  async createProduct(@Body() body: CreateProductInput) {
    return await this.productService.create(body);
  }
}
