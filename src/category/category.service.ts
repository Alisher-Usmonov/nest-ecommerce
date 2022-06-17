import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

    async findAll(): Promise<CategoryDocument[]> {
        return await this.categoryModel.find();
    }

    async findOne(slug: string): Promise<CategoryDocument> {
        return await this.categoryModel.findOne({
            slug
        });
    }

    async create(data: CreateCategoryDto): Promise<CategoryDocument> {
        return await this.categoryModel.create(data);
    }

    async update(data: CreateCategoryDto, id: string): Promise<CategoryDocument> {
        return await this.categoryModel.findOneAndUpdate({
            id
        }, data);
    }

    async delete(id: string) {
        return await this.categoryModel.findOneAndDelete({
            id
        });
    }
}
