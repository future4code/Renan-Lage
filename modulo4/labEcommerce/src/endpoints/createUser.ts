import { Request, Response } from "express";
import { connection } from "../index";

export const createUser = async (req: Request, res: Response) => {
 try {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
   throw new Error("Checar nome, email, ou senha")
  }
  const info = await connection.raw(`
  INSERT INTO labecommerce_users (name, email, password ) VALUES (
   "${name}",
   "${email}",
   "${password}"
   );
   `);

  res.send({ info, message: "Cadastro realizado com sucesso" })

 } catch (error: any) {
  switch (error) {
   case "Checar nome, email, ou senha":
    res.status(404)
  }
  res.send({ message: error.message })
 }
}