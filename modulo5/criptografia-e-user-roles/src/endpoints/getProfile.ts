import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export default async function getProfile(
 req: Request,
 res: Response
): Promise<void> {
 try {
  const token = req.headers.authorization as string;

  const tokenData = new Authenticator().getTokenData(token)

  if (!tokenData) {
   res.statusCode = 401
   res.statusMessage = "token invalido ou nao passado no headers"
   throw new Error()
  }

  if (tokenData.role !== "NORMAL") {
   throw new Error("Only a normal user can access this funcionality");
  }

  const [user] = await connection("User").where({ id:tokenData.id })

  res.status(200).send({
   id: user.id,
   email: user.email,
   role: tokenData.role,
  });

 } catch (error: any) {
  if (res.statusCode === 200) {
   res.status(500).send({ message: "Internal server error" })
  } else {
   res.send({ message: error.sqlMessage || error.message })
  }
 }
}