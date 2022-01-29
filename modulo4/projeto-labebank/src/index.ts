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
 res.status(200).send({ result: users })
})

app.get('/user', (req: Request, res: Response) => {
 try {
  let CPF = req.headers.cpf as string
  let searchUser: User | undefined

  searchUser = users.find((user) => CPF === user.CPF)
  if (!CPF) {
   throw new Error("Please compleat name and CPF")
  } else if (!searchUser) {
   throw new Error("User not found, check values")
  }
  res.status(200).send({ result: searchUser.balance })

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
  let { name, CPF, birthDate } = req.body
  let newUser: User
  let birthSplit
  let birthYear: number | undefined
  let checkCPF

  if (!name || !CPF || !birthDate) {
   throw new Error("Please compleat all values")
  }
  
  birthSplit = birthDate.split('/')
  birthYear = Number(birthSplit[2])

  checkCPF = users.find((user) => user.CPF === CPF)
  if ((2022 - birthYear) < 18) {
   throw new Error("need to be 18 years old")
  } else if (checkCPF) {
   throw new Error("CPF already existing")
  }

  newUser = {
   id: Date.now(),
   name,
   CPF,
   birthDate,
   balance: 0,
   extract: []
  }

  users.push(newUser)

  res.send({ newUser, users, })

 } catch (error: any) {
  switch (error.message) {
   case "Please compleat all values":
    res.status(401)
    break
   case "need to be 18 years old":
    res.status(402)
    break
   case "CPF already existing":
    res.status(403)
    break
   default:
    res.status(500)
  }
  res.send({ message: error.message })
 }
})