import { BaseDatabase } from "./BaseDatabase";
import { Product, Tags, ProductsInputDTO, TagsInputDTO, ProdTagInputDTO } from "../business/entities/Product";
import { CustomError } from "../business/error/CustomError";

export class ProductDataBase extends BaseDatabase {

 private static TABLE_PRODUCT = "products";
 private static TABLE_TAGS = "tags";
 private static TABLE_PROD_TAGS = "products_tags";


 public static toProductModel(prod: any): Product {
  return new Product(
   prod.id,
   prod.name,
   prod.tags
  )
 }

 public async createProduct(
  id: string,
  name: string
 ): Promise<void> {
  try {
   await BaseDatabase.connection
    .insert({
     id,
     name
    })
    .into(ProductDataBase.TABLE_PRODUCT)
  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 1");
  }
 }

 public async createTag(
  id: string,
  name: string
 ): Promise<TagsInputDTO> {
  try {
   await BaseDatabase.connection
    .insert({
     id,
     name
    })
    .into(ProductDataBase.TABLE_TAGS)
   return {
    id,
    name
   }
  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 2");
  }
 }

 public async createProdTag(
  id: string,
  id_product: string,
  id_tag: string
 ): Promise<void> {
  try {
   await BaseDatabase.connection
    .insert({
     id,
     id_product,
     id_tag
    })
    .into(ProductDataBase.TABLE_PROD_TAGS)
  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 3");
  }
 }

 public async getProductById(id: string): Promise<ProductsInputDTO | undefined> {
  try {
   const result = await BaseDatabase.connection
    .select("*")
    .from(ProductDataBase.TABLE_PRODUCT)
    .where({ id: id })

   let product: ProductsInputDTO[] | undefined = result.map((prod) => {
    return {
     id: prod.id,
     name: prod.name,
     tags: []
    }
   })
   return product[0]
  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 4");
  }
 }

 public async getProductByName(name: string): Promise<ProductsInputDTO[] | undefined> {
  try {
   const result = await BaseDatabase.connection
    .select("*")
    .from(ProductDataBase.TABLE_PRODUCT)
    .where({ name: name })

   let products: ProductsInputDTO[] | undefined = result.map((prod) => {
    return {
     id: prod.id,
     name: prod.name,
     tags: []
    }
   })
   return products
  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 5 ");
  }
 }

 public async getTagByName(name: string) {
  try {
   const result = await BaseDatabase.connection
    .select("*")
    .from(ProductDataBase.TABLE_TAGS)
    .where({ name: name })

   let tag: TagsInputDTO[] | undefined = result.map((tag) => {
    return {
     id: tag.id,
     name: tag.name
    }
   })
   return tag[0]
  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 6");
  }
 }

 public async getTagById(id: string): Promise<TagsInputDTO | undefined> {
  try {
   const result = await BaseDatabase.connection
    .select("*")
    .from(ProductDataBase.TABLE_TAGS)
    .where({ id: id })

   let tag = result.map((tag) => {
    return {
     id: tag.id,
     name: tag.name
    }
   })
   return tag[0]
  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 7");
  }
 }

 public async getProdTagByIdProd(id_product: string): Promise<ProdTagInputDTO[] | undefined> {
  try {
   const result = await BaseDatabase.connection
    .select('*')
    .from(ProductDataBase.TABLE_PROD_TAGS)
    .where({ id_product: id_product })

   const response: ProdTagInputDTO[] | undefined = result.map((prodTag) => {
    return {
     id: prodTag.id,
     id_product: prodTag.id_product,
     id_tag: prodTag.id_tag
    }
   })

   return response

  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 8");
  }
 }

 public async getProdTagByIdTag(id_tag: string): Promise<ProdTagInputDTO[] | undefined> {
  try {
   const result = await BaseDatabase.connection
    .select('*')
    .from(ProductDataBase.TABLE_PROD_TAGS)
    .where({ id_tag: id_tag })

   const response: ProdTagInputDTO[] | undefined = result.map((prodTag) => {
    return {
     id: prodTag.id,
     id_product: prodTag.id_product,
     id_tag: prodTag.id_tag
    }
   })

   return response

  } catch (error) {
   throw new CustomError(500, "An unexpected error ocurred 9");
  }
 }
}