import { 
    Controller,
    Get, 
    Param, 
    Post, 
    Patch, 
    Delete, 
    Body,
    ParseIntPipe,
    HttpException,
    HttpStatus
 } from '@nestjs/common';
import { ProductsService } from './products.service';
import { SlugProvider } from './slug.provider';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService, private slugProvider: SlugProvider) {}

    @Get()
    async all() {
        return await this.productService.findAll();
    }

    @Get(":slug")
    async get(@Param("slug") slug: string) {
        return await this.productService.findOne(slug);
    }

    @Post()
    async post(
        @Body("name") name: string,
        @Body("category_id") category_id: string,
        @Body("description") description: string,
        @Body("price", ParseIntPipe) price: number,
    ) {
        let slug = this.slugProvider.createSlug(name);
        return await this.productService.create({
            name,
            description,
            price,
            slug,
            category_id
        });
    }

    @Patch(":id")
    async update(
        @Param("id") id:string,
        @Body("category_id") category_id: string,
        @Body("name") name: string,
        @Body("description") description: string,
        @Body("price", ParseIntPipe) price: number
        ) {
        let newSlug = this.slugProvider.createSlug(name);
        return await this.productService.updateOne({
            slug: newSlug,
            name,
            description,
            price,
            category_id
        }, id);
    }

    @Delete(":id")
    async delete(@Param("id") id: string) {
        await this.productService.deleteOne(id);
        throw new HttpException(`Product successfully deleted`, HttpStatus.OK)
    }
}
