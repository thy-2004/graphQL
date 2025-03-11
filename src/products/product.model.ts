import { Field, Float, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CategoryModel } from 'src/categories/category.model'

@ObjectType()
export class ProductModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field()
  description: string;

  @Field(() => ID)
  categoryId: string;

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

  @Field(() => ID)
  categoryId: string;
}

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ID)
  categoryId: string;
  
}
