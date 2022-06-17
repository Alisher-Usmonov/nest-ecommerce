import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from "@nestjs/mongoose";
import { keys } from "./config/keys";
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MongooseModule.forRoot(keys.mongoURI), ProductsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
