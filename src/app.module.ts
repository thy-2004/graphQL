import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { Category } from './products/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Thy@2304',
      database: 'graphQL',
      entities: [Product, Category],
      synchronize: false, // Tắt synchronize
      migrations: ['src/migrations/*.ts'],
      migrationsRun: true,
    }),
    

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    ProductsModule,
  ],
})
export class AppModule {}
