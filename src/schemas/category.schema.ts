import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 } from "uuid";

export type CategoryDocument = Category | Document;

@Schema()
export class Category {
    @Prop({ required: true, default: v4(), unique: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    slug: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);