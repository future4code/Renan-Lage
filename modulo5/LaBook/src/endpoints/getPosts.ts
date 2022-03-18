import { Request, Response } from "express";
import connection from "../connection";
import { post } from "../model/types";

export default async function getPosts(
 req: Request,
 res: Response
): Promise<void> {
 try {
  let message = "Success!"

  const queryResult: any = await connection("labook_posts")
   .select("*")


  if (!queryResult) {
   res.statusCode = 404
   message = "Post not found"
   throw new Error(message)
  }

  const posts: post[] = queryResult.map((eachPost:any)=>{
   return {
    id: eachPost.id,
    photo: eachPost.photo,
    description: eachPost.description,
    type: eachPost.type,
    createdAt: eachPost.created_at,
    authorId: eachPost.author_id,
   }
  })
  
  res.status(200).send({ message })

 } catch (error: any) {
  let message = error.sqlMessage || error.message
  res.statusCode = 400

  res.send({ message })
 }
}
