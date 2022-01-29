import express, { Request, Response } from "express";
import { User, users, ExtractBank } from "./data";
import { AddressInfo } from "net";
import { errorMonitor } from "events";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost:${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});;

app.get('/test', (req: Request, res: Response) => {
 res.send("ola mundo! ")
})

app.get('/users', (req: Request, res: Response) => {
 res.send({ result: users })
})

app.get('/user', (req: Request, res: Response) => {
 try {
  let CPF = req.headers.cpf as string
  let name = req.headers.name as string
  let searchUser: User | undefined

  searchUser = users.find((user) => CPF === user.CPF && name === user.name)
  if (!CPF || !name) {
   throw new Error("Please compleat name and CPF")
  } else if (!searchUser) {
   throw new Error("User not found, check values")
  }
  res.send({ result: searchUser })

 } catch (error: any) {
  switch (error.message) {
   case "User not found, check values":
    res.status(401)
    break
   case "Please compleat name and CPF":
    res.status(401)
    break
   default:
    res.status(500)
  }
  res.send({ message: error.message })
 }
})

app.post('/user', (req: Request, res: Response) => {
 try {

 } catch (error: any) {

 }
})