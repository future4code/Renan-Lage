import { getPurchaseForId } from './getPurchaseForId';
import { findPurchases } from './../services/findPurchases';
import { User } from './../types/types';
import { Request, Response } from "express";
import { connection } from "../index";

export const getUsers = async (req: Request, res: Response) => {
 try {
  let users: User[]
  const info = await connection.raw(`
  SELECT * FROM labecommerce_users;
   `);
  
  users = info[0].map( (user: any) => {
   return {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password
   }
  })

  res.send({ response: users })

 } catch (error: any) {
  switch (error) {
   case "Checar nome, email, ou senha":
    res.status(404)
  }
  res.send({ message: error.message })
 }
}