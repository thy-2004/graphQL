import { Field, Float, Int, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field()
  description: string;

  @Field(() => Int) // Thay đổi từ ID (string) sang Int (number)
  categoryId: number;
}
