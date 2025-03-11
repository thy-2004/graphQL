import { Field, Float, Int, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true }) // Sửa từ ID (string) thành Int (number)
  categoryId?: number;
}
