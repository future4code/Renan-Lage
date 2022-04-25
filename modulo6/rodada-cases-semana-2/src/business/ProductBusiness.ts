import { Product, ProductInputCreate, TagsInputDTO, Tags } from './entities/Product';
import { IdGenerator } from './services/IdGenerator';
import { ProductDataBase } from "../data/ProductDataBase";

export class ProductBusiness {
 constructor(
  private idGenerator: IdGenerator,
  private productDataBase: ProductDataBase
 ) { }

 async createProduct(prod: ProductInputCreate) {
  const id_product = this.idGenerator.generate();

  await this.productDataBase.createProduct(
   id_product,
   prod.name
  )
  for (let i = 0; i < prod.tags.length; i++) {
   let res = await this.productDataBase.getTagByName(prod.tags[i])
   let idProdTag = this.idGenerator.generate()
   if (!res) {
    let id_tag = this.idGenerator.generate()
    this.productDataBase.createTag(id_tag, prod.tags[i])
    this.productDataBase.createProdTag(idProdTag, id_product, id_tag)
   } else if (res) {
    this.productDataBase.createProdTag(idProdTag, id_product, res.id)
   }
  }
 }

 async getProductById(id: string): Promise<Product | undefined> {

  let product = await this.productDataBase.getProductById(id)
  const prodTag = await this.productDataBase.getProdTagByIdProd(id)
  let tags: Tags = []

  if (!product) {
   return undefined
  }
  if (product) {

   if (prodTag) {
    for (let i = 0; i < prodTag.length; i++) {
     let tag = await this.productDataBase.getTagById(prodTag[i].id_tag)
     if (tag) {
      tags.push(tag.name)
     }
    }
   }

   return new Product(product.id, product.name, tags)
  }
 }

 async getProductsByName(name: string): Promise<Product[] | undefined> {
  let products = await this.productDataBase.getProductByName(name)
  let newProducts = []

  if (!products) {
   return undefined
  }
  if (products) {

   for (let i = 0; i < products.length; i++) {
    const prodTag = await this.productDataBase.getProdTagByIdProd(products[i].id)
    let tags = []

    if (prodTag) {
     for (let x = 0; x < prodTag.length; x++) {
      let tag = await this.productDataBase.getTagById(prodTag[x].id_tag)

      if (tag) {
       tags.push(tag.name)
      }
     }
    }
    newProducts.push(new Product(products[i].id, products[i].name, tags))
   }
  }
  return newProducts
 }

 async getProductsByTag(tag: string): Promise<Product[] | undefined> {
  const tagComplete = await this.productDataBase.getTagByName(tag)
  let products = []
  if (!tagComplete) {
   return undefined
  }
  if (tagComplete) {
   const prodTag = await this.productDataBase.getProdTagByIdTag(tagComplete.id)
   if (prodTag) {
    for (let i = 0; i < prodTag.length; i++) {
     let prod = await this.getProductById(prodTag[i].id_product)
     if (prod) {
      products.push(prod)
     }
    }
   }
  }
  return products
 }
}
