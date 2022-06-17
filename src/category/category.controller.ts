import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SlugProvider } from 'src/products/slug.provider';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService, private slugProvider: SlugProvider) {}

    @Get()
    async root() {
        return await this.categoryService.findAll();
    }

    @Get(":slug")
    async getOne(@Param("slug") slug: string) {
        return await this.categoryService.findOne(slug);
    }

    @Post()
    async createOne(
        @Body("name") name: string
    ) {
        let slug = this.slugProvider.createSlug(name);
        return this.categoryService.create({
            name,
            slug
        })
    }

    @Patch(":id")
    async updateOne(
        @Param("id") id: string,
        @Body("name") name: string
    ) {
        let slug = this.slugProvider.createSlug(name);
        return await this.categoryService.update({
            name,
            slug
        }, id);
    } 

    @Delete(":id")
    async deleteOne(
        @Param("id") id: string
    ) {
        return await this.categoryService.delete(id);
    }
}