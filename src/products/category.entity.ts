import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Product from './product.entity';

@Entity()
export class Categoty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;
}
