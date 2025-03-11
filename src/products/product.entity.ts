import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn } from 'typeorm';
import { Category } from './category.entity';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  description: string;

  @Column()
  categoryId: number; // Đảm bảo là kiểu number

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' }) 
  category: Category;
}
