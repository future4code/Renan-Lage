import { ProductController } from './../ProductsController';
import express from "express";


export const productRouter = express.Router()

const productController = new ProductController();

productRouter.post('/', productController.createProduct)
productRouter.get('/name', productController.getProductsByName)
productRouter.get('/id', productController.getProductById)
productRouter.get('/tag', productController.getProductsByTag)
