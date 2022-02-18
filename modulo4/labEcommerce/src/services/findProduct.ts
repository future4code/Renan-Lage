import { Product } from './../types/types';
import { connection } from "../index";

export const findProduct = async (idProduct: number): Promise<Product | null> => {
 try {
  if (!idProduct) {
   throw new Error("Checar id")
  }
  const info = await connection.raw(`
  SELECT * FROM labecommerce_products WHERE id = ${idProduct};
  `);

  const product = {
   id: info[0][0].id,
   name: info[0][0].name,
   price: Number(info[0][0].price),
   image_url: info[0][0].image_url
  }
  return product

 } catch (error: any) {
  console.log("erro no sistema", error)
  return null
 }
}