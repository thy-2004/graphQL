import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field()
  id: number;

  @Field()
  name?: string;

  @Field()
  price?: number;

  @Field()
  description?: string;

  @Field()
  categoryId?: number;
}
