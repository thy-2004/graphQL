import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Product from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  public getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }
  public async create() {
    // const product = await this.productRepository.findOne({
    //   where: {
    //     id: 1,
    //   },
    // });
    return await this.productRepository.delete(1);
    // const product = new Product();
    //    product.name = 'abc';
    //     product.description = '4535454';
    //     product.image = '6565';
    //     product.price = '56565';

    // return this.productRepository.save(product);
  }
}
