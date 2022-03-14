import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerated } from "../services/IdGenerated";

export default async function createPost(
 req: Request,
 res: Response
): Promise<void> {
 try {
  let message = "Success!"

  const { photo, description, type } = req.body

  const token: string = req.headers.authorization as string

  const tokenData = new Authenticator().getTokenData(token)

  const id: string = new IdGenerated().generatedId()

  if (tokenData) {
   await connection("labook_posts")
    .insert({
     id,
     photo,
     description,
     type,
     author_id: tokenData.id
    })
  }
  
  res.status(201).send({ message })

 } catch (error: any) {
  let message = error.sqlMessage || error.message
  res.statusCode = 400

  res.send({ message })
 }
}