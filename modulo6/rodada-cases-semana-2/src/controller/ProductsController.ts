import { Request, Response } from "express";
import { ProductInputCreate } from "../business/entities/Product";
import { CustomError } from "../business/error/CustomError";
import { IdGenerator } from '../business/services/IdGenerator';
import { ProductDataBase } from '../data/ProductDataBase';
import { ProductBusiness } from './../business/ProductBusiness';


const prodcutBusinnes = new ProductBusiness(
 new IdGenerator(),
 new ProductDataBase(),
)

export class ProductController {
 async createProduct(req: Request, res: Response) {
  try {

   const prod: ProductInputCreate = {
    name: req.body.name,
    tags: req.body.tags
   }

   if (!prod) {
    throw new CustomError(400, "Faltou o Produto")
   }

   await prodcutBusinnes.createProduct(prod)

   res.status(200).send("Produto criado com sucesso")

  } catch (error) {
   res
    .status(error.statusCode || 400)
    .send({ error: error.message });
  }
 }

 async getProductById(req: Request, res: Response) {
  try {
   const id = req.query.id as string

   if (!id) {
    throw new CustomError(404, "Faltou o id")
   }

   const response = await prodcutBusinnes.getProductById(id)

   if (!res) {
    throw new CustomError(404, "Produto não encontrado")
   }

   res.status(200).send({ res: response })

  } catch (error) {
   res
    .status(error.statusCode || 400)
    .send({ error: error.message });
  }
 }

 async getProductsByName(req: Request, res: Response) {
  try {

   const name = req.query.name as string

   if (!name) {
    throw new CustomError(404, "Faltou name")
   }

   const response = await prodcutBusinnes.getProductsByName(name)

   if (!response) {
    throw new CustomError(404, "produto não encontrado")
   }

   res.status(200).send({ res: response })
  } catch (error) {
   res
    .status(error.statusCode || 400)
    .send({ error: error.message });
  }

 }

 async getProductsByTag(req: Request, res: Response) {
  try {

   const tag = req.query.tag as string

   if (!tag) {
    throw new CustomError(404, "Faltou name")
   }

   const response = await prodcutBusinnes.getProductsByTag(tag)

   if (!response) {
    throw new CustomError(404, "produto não encontrado")
   }

   res.status(200).send({ res: response })
  } catch (error) {
   res
    .status(error.statusCode || 400)
    .send({ error: error.message });
  }

 }

 
}
