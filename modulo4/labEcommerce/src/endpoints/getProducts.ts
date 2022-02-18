import { Product } from './../types/types';

import { Request, Response } from "express";
import { connection } from "../index";

export const getProducts = async (req: Request, res: Response) => {
 try {
  let search = req.query.search
  let order: any = req.query.order
  let result: any

  const info = await connection.raw(`
  SELECT * FROM labecommerce_products;
   `);

  if (order === "asc") {
   order = 1
  } else if (order === "desc") {
   order = -1
  }

  if (!search) {
   result = info[0]
    .map((user: any) => {
     return {
      id: user.id,
      name: user.name,
      price: Number(user.price),
      image_url: user.image_url
     }
    })
    .sort((a: Product, b: Product) => {
     return a.name.localeCompare(b.name) * order
    })
  } else {
   result = info[0]
    .filter((user: any) => {
     return user.name === search
    })
    .map((user: any) => {
     return {
      id: user.id,
      name: user.name,
      price: Number(user.price),
      image_url: user.image_url
     }
    })
  }

  res.send({ response: result })

 } catch (error: any) {
  switch (error) {
   case "Checar nome, email, ou senha":
    res.status(404)
    break
   case "order not found":
    res.status(404)
    break
   default:
    res.status(500)
  }
  res.send({ message: error.message })
 }
}