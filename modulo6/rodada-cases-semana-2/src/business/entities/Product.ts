import { CustomError } from "../error/CustomError";

export type Tags = string[]

export class Product {
 constructor(
  public id: string,
  public name: string,
  public tags: Tags
 ) { }
}

export interface ProductInputCreate {
 name: string;
 tags: string[]
}

export interface ProductsInputDTO {
 id: string;
 name: string;
 tags:string[]
}

export interface TagsInputDTO {
 id: string;
 name: string;
}

export interface ProdTagInputDTO {
 id: string,
 id_product: string,
 id_tag: string
}