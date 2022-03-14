import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerated } from "../services/IdGenerated";

export default async function signup(
 req: Request,
 res: Response
): Promise<void> {
 try {
  let message = "Success!"
  const { name, email, password } = req.body

  if (!name || !email || !password) {
   res.statusCode = 406
   message = '"name", "email" and "password" must be provided'
   throw new Error(message)
  }

  const id: string = new IdGenerated().generatedId()

  const cypherPassword: string = new HashManager().createHash(password)
  
  await connection('labook_users')
   .insert({
    id,
    name,
    email,
    password: cypherPassword
   })

  const token: string = new Authenticator().generateToken({ id })

  res.status(201).send({ message, token })

 } catch (error: any) {
  res.statusCode = 400
  let message = error.sqlMessage || error.message

  res.send({ message })
 }
}
