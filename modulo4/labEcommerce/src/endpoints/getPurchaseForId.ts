import { findPurchases } from './../services/findPurchases';
import { findUser } from './../services/findUser';
import { Request, Response } from "express";
import { connection } from "../index";

export const getPurchaseForId = async (req: Request, res: Response) => {
 try {
  let result
  let user_id = Number(req.params.id)
  if (!user_id) {
   throw new Error('Checar id')
  }
  let user = await findUser(user_id)
  let purchases = await findPurchases(user_id)

  result = { user, purchases: purchases }

  res.send({ result })

 } catch (error: any) {
  switch (error) {
   case "Checar nome, email, ou senha":
    res.status(404)
  }
  res.send({ message: error.message })
 }
}