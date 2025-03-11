import { Field, Float, Int, InputType, ObjectType } from '@nestjs/graphql';
import { CategoryModel } from 'src/categories/category.model';

@ObjectType()
export class ProductModel {
  @Field(() => Int) // Thay ID bằng Int nếu database lưu categoryId là number
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field()
  description: string;

  @Field(() => Int) // Thay ID bằng Int
  categoryId: number;

  @Field(() => CategoryModel, { nullable: true }) 
  category?: CategoryModel;
}

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field()
  description: string;

  @Field(() => Int) // Thay ID bằng Int
  categoryId: number;
}

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true }) // Thay ID bằng Int
  categoryId?: number;
}
