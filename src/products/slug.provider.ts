import { Injectable } from "@nestjs/common";
import slugify from "slugify";

@Injectable()
export class SlugProvider {
    createSlug(text: string): string {
        return slugify(text, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
        })
    }
}