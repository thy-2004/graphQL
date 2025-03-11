import { Field, InputType , ID, Float} from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field(() => ID)
  categoryId: string; 
  
}
