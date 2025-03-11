import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductModel } from '../products/product.model';

@ObjectType()
export class CategoryModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [ProductModel], { nullable: true })
  products?: ProductModel[];
}
