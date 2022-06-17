import { Express } from "express";

export class CreateProductDto {
    readonly id: string;
    readonly name: string;
    readonly slug: string;
    readonly price: number;
    readonly description: string;
    readonly image: Express.Multer.File;
    readonly catergory_id: number;
}