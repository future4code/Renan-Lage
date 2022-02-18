import { findProduct } from './../services/findProduct';
import { Product } from './../types/types';
import { Request, Response } from "express";
import { connection } from "../index";

export const createPurchase = async (req: Request, res: Response) => {
 try {
  const { user_id, product_id, quantity } = req.body
  let product = await findProduct(Number(product_id))

  if (!user_id || !product_id || !quantity) {
   throw new Error("Checar nome, preço, ou foto")
  }

  if (!product) {
   throw new Error("produto não encontrado")
  }
  let total_price = quantity * product.price

  const info = await connection.raw(`
  INSERT INTO labecommerce_purchases (user_id, product_id, quantity, total_price )  
  VALUES (
   "${user_id}",
   "${product_id}",
   "${quantity}",
   "${total_price}"
  );
   `);

  res.send({ info, message: "Produto cadastrado com sucesso" })

 } catch (error: any) {
  switch (error) {
   case "Checar nome, preço, ou foto":
    res.status(404)
    break
   case "produto não encontrado":
    res.status(404)
    break
   default:
    res.status(500)
  }
  res.send({ message: error.message })
 }
}