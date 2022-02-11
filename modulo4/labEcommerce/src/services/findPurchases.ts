import { Purchase } from './../types/types';
import { connection } from "../index";

export const findPurchases = async (user_id: number): Promise<Purchase[] | null> => {
 try {
  let purchases
  if (!user_id) {
   throw new Error("Checar id")
  }
  const info = await connection.raw(`
  SELECT * FROM labecommerce_purchases WHERE user_id = ${user_id};
   `);
  if (!info) {
   throw new Error("user not found")
  } else {
   purchases = info[0].map((purchase: any) => {
    return ({
     id: Number(purchase.id),
     user_id: Number(purchase.user_id),
     product_id: Number(purchase.product_id),
     quantity: purchase.quantity,
     total_price: purchase.total_price
    })
   })
  }

  return purchases

 } catch (error: any) {
  console.log(error)
  return null
 }
}
