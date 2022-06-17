import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 } from "uuid";

export type ProductDocument = Document | Product;

@Schema()
export class Product {
    @Prop({ required: true, unique: true, default: v4() })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    slug: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    category_id: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);