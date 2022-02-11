import { Request, Response } from "express";
import { connection } from "../index";

export const createProducts = async (req: Request, res: Response) => {
 try {
  const { name, price , image_url } = req.body
  if (!name || !price || !image_url) {
   throw new Error("Checar nome, preço, ou foto")
  }
  const info = await connection.raw(`
  INSERT INTO labecommerce_products (name, price, image_url ) VALUES (
   "${name}",
   "${price}",
   "${image_url}"
   );
   `);

  res.send({ info, message: "Produto cadastrado com sucesso" })

 } catch (error: any) {
  switch (error) {
   case "Checar nome, email, ou senha":
    res.status(404)
  }
  res.send({ message: error.message })
 }
}