import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Product, ProductDocument } from "src/schemas/product.schema";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
    async findAll(): Promise<ProductDocument[]> {
        return await this.productModel.find();
    }

    async findOne(slug: string): Promise<ProductDocument> {
        return await this.productModel.findOne({
            slug
        })
    }

    async create(data): Promise<ProductDocument> {
        return await this.productModel.create(data);
    }

    async updateOne(data, id: string): Promise<ProductDocument> {
        return await this.productModel.findOneAndUpdate({
            id
        }, {
            ...data
        });
    }

    async deleteOne(id: string): Promise<ProductDocument> {
        return await this.productModel.findOneAndDelete({
            id
        });
    }
}
