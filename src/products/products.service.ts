import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductInput, UpdateProductInput } from './product.model';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productRepo.find({ relations: ['category'] });
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({ where: { id }, relations: ['category'] });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async create(input: CreateProductInput): Promise<Product> {
    const newProduct = this.productRepo.create({
      ...input,
      categoryId: Number(input.categoryId), // Chuyển đổi categoryId sang number
    });
    return this.productRepo.save(newProduct);
  }

  async update(id: number, input: UpdateProductInput): Promise<Product> {
    await this.productRepo.update(id, {
      ...input,
      categoryId: input.categoryId ? Number(input.categoryId) : undefined, // Chuyển đổi nếu có
    });
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.productRepo.delete(id);
    return result.affected > 0;
  }
}
