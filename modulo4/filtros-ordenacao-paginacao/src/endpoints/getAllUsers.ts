import { Request, response, Response } from "express"
import { off } from "process";
import { connection } from "../data/connection"
import { user } from './../types';


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
 try {
  let order: number
  const orderBy = req.query.orderBy
  const type = req.params.type
  const name = req.query.name
  const result = await selectAllUsers()
  let response: any
  if (!result.length) {
   res.statusCode = 404
   throw new Error("No recipes found")
  }

  if (req.query.order === "decrescente") {
   order = -1
  } else {
   order = 1
  }

  if (name) {
   response = result.filter((user: user) => { return user.name === name })
  } else if (type) {
   response = result.filter((user: user) => { return user.type === type })
  }
  if (orderBy === "name") {
   response = result
    .sort((a: user, b: user) => {
     return (a.name.localeCompare(b.name)) * order
    })
    .map(toUser)
  } else if (orderBy === "type") {
   response = result
    .sort((a: user, b: user) => {
     return (a.type.localeCompare(b.type)) * order;
    })
    .map(toUser)
  } else {
   response = result
    .sort((a: user, b: user) => {
     return (a.email.localeCompare(b.email)) * order;
    })
    .map(toUser)
  }

  res.status(200).send(response)

 } catch (error: any) {
  console.log(error)
  res.send(error.message || error.sqlMessage)
 }
}
const toUser = (input: any): user => {
 return {
  id: input.id,
  name: input.name,
  email: input.email,
  type: input.type
 }
}

export default async function selectAllUsers(): Promise<any> {
 const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio;
 `)

 return result[0]
}